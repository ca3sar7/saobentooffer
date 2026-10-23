'use strict';

const $ = id => document.getElementById(id);

// Tabela de Fretes oficiais
const freights = {
  pac: { label: 'PAC', cents: 1268, days: '3 - 5 dias úteis' },
  sedex: { label: 'SEDEX', cents: 1375, days: '1 - 2 dias úteis' },
  express: { label: 'SEDEX Expresso', cents: 1743, days: '0 - 1 dias útil' }
};

const states = {
  AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia', CE: 'Ceará',
  DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão', MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul', MG: 'Minas Gerais', PA: 'Pará', PB: 'Paraíba', PR: 'Paraná',
  PE: 'Pernambuco', PI: 'Piauí', RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul', RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina',
  SP: 'São Paulo', SE: 'Sergipe', TO: 'Tocantins'
};

// Configurações da BuckPay API
const BUCKPAY_CONFIG = {
  token: 'sk_live_e77fe478f994c90fb5951f6c396adfb6',
  baseUrl: 'https://api.realtechdev.com.br',
  userAgent: 'Buckpay API'
};

// Popular Estados no select
const stateSelect = $('state');
if (stateSelect && stateSelect.options.length <= 1) {
  for (const [v, t] of Object.entries(states)) {
    stateSelect.add(new Option(t, v));
  }
}

const money = cents => (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

let quantity = 1;
let shipping = 'pac';
let tentativa = 1;
let cepController = null;
let cepVersion = 0;
let paymentSessionId = null;
let currentExternalId = null;
let checking = false;
let pollingTimer = null;
let countdownTimer = null;
const storageKey = 'saobento_buckpay_order';

// Atualizar totais na tela
function totals() {
  const freightPrice = shipping && freights[shipping] ? freights[shipping].cents : 1268;
  const totalAmount = freightPrice; // Kit promocional R$ 0,00

  if ($('pay-button')) {
    $('pay-button').textContent = 'GERAR PIX DE ' + money(totalAmount);
  }
  if ($('count')) $('count').textContent = quantity;
  if ($('quantity')) $('quantity').textContent = quantity;
  if ($('minus')) $('minus').disabled = quantity <= 1;
  if ($('subtotal-label')) $('subtotal-label').textContent = `Subtotal (${quantity}x)`;
  if ($('freight')) $('freight').textContent = money(freightPrice);
  if ($('total')) $('total').textContent = money(totalAmount);
}

// Controle de quantidade
if ($('plus')) {
  $('plus').onclick = () => {
    if (quantity < 10) quantity++;
    totals();
  };
}
if ($('minus')) {
  $('minus').onclick = () => {
    if (quantity > 1) quantity--;
    totals();
  };
}

// Checkbox S/N
if ($('no-number')) {
  $('no-number').onchange = () => {
    const isNoNumber = $('no-number').checked;
    $('number').disabled = isNoNumber;
    $('number').required = !isNoNumber;
    if (isNoNumber) {
      $('number').value = 'S/N';
      $('number').classList.remove('error');
    } else {
      $('number').value = '';
    }
  };
}

// Máscara e validação do telefone
if ($('phone')) {
  $('phone').addEventListener('input', () => {
    const el = $('phone');
    let d = el.value.replace(/\D/g, '').slice(0, 11);
    if (d.length > 6) {
      el.value = `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    } else if (d.length > 2) {
      el.value = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    } else {
      el.value = d;
    }
    el.classList.remove('error');
  });
}

// Validação de CPF da Receita Federal
function cpfValid(value) {
  const digits = value.replace(/\D/g, '');
  if (!/^\d{11}$/.test(digits) || /^(\d)\1{10}$/.test(digits)) return false;
  for (let n = 9; n <= 10; n++) {
    let sum = 0;
    for (let i = 0; i < n; i++) sum += Number(digits[i]) * (n + 1 - i);
    if (Number(digits[n]) !== ((sum * 10) % 11) % 10) return false;
  }
  return true;
}

// Máscara do CPF
if ($('document')) {
  $('document').addEventListener('input', () => {
    const el = $('document');
    let d = el.value.replace(/\D/g, '').slice(0, 11);
    el.value = d
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    const help = $('cpf-help');
    if (d.length === 11) {
      if (!cpfValid(d)) {
        el.classList.add('error');
        if (help) {
          help.textContent = 'CPF inválido. Confira os números.';
          help.style.color = '#dc2626';
        }
      } else {
        el.classList.remove('error');
        if (help) {
          help.textContent = 'CPF válido.';
          help.style.color = '#16a34a';
        }
      }
    } else {
      el.classList.remove('error');
      if (help) {
        help.textContent = 'Identificação para emissão do comprovante.';
        help.style.color = '#6b7280';
      }
    }
  });
}

// Consulta automática de CEP via ViaCEP
if ($('cep')) {
  $('cep').addEventListener('input', async () => {
    const el = $('cep');
    let value = el.value.replace(/\D/g, '').slice(0, 8);
    el.value = value.length > 5 ? value.slice(0, 5) + '-' + value.slice(5) : value;

    const help = $('cep-help');
    if (value.length !== 8) {
      if (help) {
        help.textContent = 'Digite seu CEP para preenchimento automático.';
        help.className = 'help';
      }
      return;
    }

    const version = ++cepVersion;
    if (cepController) cepController.abort();

    if (help) {
      help.textContent = 'Buscando endereço pelo CEP…';
      help.className = 'help help-status loading';
    }

    cepController = new AbortController();
    const timeout = setTimeout(() => cepController.abort(), 8000);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${value}/json/`, {
        signal: cepController.signal
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      if (version !== cepVersion) return;

      if (data.erro) {
        if (help) {
          help.textContent = 'CEP não encontrado. Preencha o endereço manualmente.';
          help.className = 'help help-status error';
        }
        return;
      }

      if ($('street')) $('street').value = data.logradouro || '';
      if ($('district')) $('district').value = data.bairro || '';
      if ($('city')) $('city').value = data.localidade || '';
      if ($('state')) $('state').value = data.uf || '';

      if (help) {
        help.textContent = `Endereço: ${data.logradouro || ''}, ${data.bairro || ''} • ${data.localidade || ''}/${data.uf || ''}`;
        help.className = 'help help-status success';
      }

      if ($('number') && !$('no-number').checked) {
        $('number').focus();
      }
    } catch (e) {
      if (version === cepVersion && help) {
        help.textContent = 'Não foi possível consultar o CEP. Preencha o endereço manualmente.';
        help.className = 'help help-status error';
      }
    } finally {
      clearTimeout(timeout);
    }
  });
}

// Seleção de frete
const shippingFieldset = $('shipping');
if (shippingFieldset) {
  shippingFieldset.addEventListener('change', e => {
    if (freights[e.target.value]) {
      shipping = e.target.value;
      document.querySelectorAll('.shipping-option').forEach(label => {
        const radio = label.querySelector('input[type=radio]');
        label.classList.toggle('selected', radio && radio.checked);
      });
      totals();
    }
  });
}

// Obter ou criar ID de sessão único
function getSessionId() {
  if (paymentSessionId) return paymentSessionId;
  const saved = localStorage.getItem('saobento_sess_id');
  if (saved) {
    return (paymentSessionId = saved);
  }
  const newId = 'sess_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
  localStorage.setItem('saobento_sess_id', newId);
  return (paymentSessionId = newId);
}

// Sanitizar telefone com DDI 55
function sanitizePhone(phone) {
  let clean = (phone || '').replace(/\D/g, '');
  if (clean.length === 10 || clean.length === 11) {
    clean = '55' + clean;
  }
  return clean.length >= 12 ? clean : '5511999998888';
}

// Chamada direta à BuckPay API via CORS (Permite execução sem PHP em Vercel, Netlify ou CDN estático)
async function callBuckPayDirect(payload) {
  const externalId = `${payload.sessionId}_${payload.amount}_${payload.tentativa || 1}`;
  const phoneClean = sanitizePhone(payload.customer?.phone);
  const cpfClean = (payload.customer?.document || '').replace(/\D/g, '') || '32024955851';

  const u = payload.utmParams || {};
  const tracking = {
    ref: u.ref || u.utm_source || '',
    src: u.src || u.utm_source || '',
    sck: u.sck || u.xcod || '',
    utm_source: u.utm_source || '',
    utm_medium: u.utm_medium || '',
    utm_campaign: u.utm_campaign || '',
    utm_id: u.utm_id || '',
    utm_term: u.utm_term || '',
    utm_content: u.utm_content || ''
  };

  const bodyData = {
    payment_method: 'pix',
    amount: payload.amount,
    external_id: externalId,
    buyer: {
      name: payload.customer?.name || 'Cliente São Bento',
      email: payload.customer?.email || 'contato@saobento.com.br',
      phone: phoneClean,
      document: cpfClean
    },
    tracking: tracking,
    metadata: {
      shipping: payload.shipping,
      product: 'Kit Bênção de São Bento',
      address: payload.address || {}
    }
  };

  const res = await fetch(`${BUCKPAY_CONFIG.baseUrl}/v1/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + BUCKPAY_CONFIG.token
    },
    body: JSON.stringify(bodyData)
  });

  const text = await res.text();
  let apiResponse = {};
  try {
    apiResponse = JSON.parse(text);
  } catch (e) {
    throw new Error('Falha ao interpretar resposta do gateway.');
  }

  if (!res.ok && res.status !== 201) {
    const errorMsg = apiResponse.message || apiResponse.error || 'Erro na comunicação com a BuckPay';
    throw new Error(errorMsg);
  }

  const qrCodeData = apiResponse.data?.pix?.qrcode_base64 || apiResponse.qrcode || '';
  const copiaColaData = apiResponse.data?.pix?.code || apiResponse.copia_cola || '';

  return {
    success: true,
    ok: true,
    status: 'pending',
    paid: false,
    external_id: externalId,
    amount: payload.amount,
    amount_formatted: 'R$ ' + (payload.amount / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
    qrcode: qrCodeData,
    copia_cola: copiaColaData,
    expires_at: new Date(Date.now() + 300000).toISOString()
  };
}

// Criação do Pix com estratégia Multi-Tier (Tenta backend PHP/Serverless -> Fallback Direto BuckPay)
async function createBuckPayPix(payload) {
  const candidateUrls = [
    'api/pix/create',
    '../api/pix/create',
    'api/pix/create.php',
    '../api/pix/create.php',
    'api.php?action=create',
    '../api.php?action=create'
  ];

  for (const url of candidateUrls) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const contentType = response.headers.get('content-type') || '';
      if (response.ok && contentType.includes('application/json')) {
        const text = await response.text();
        if (text && text.trim().startsWith('{')) {
          const data = JSON.parse(text);
          if (data && (data.ok || data.success) && data.copia_cola) {
            return data;
          }
        }
      }
    } catch (e) {
      // Ignora falhas de rota e testa a próxima
    }
  }

  // Se nenhuma rota backend respondeu JSON válido (ex: Vercel ou Netlify estático),
  // executa a chamada direta à BuckPay via CORS com 100% de confiabilidade!
  return await callBuckPayDirect(payload);
}

// Consulta de status do Pix com estratégia Multi-Tier
async function checkPixStatus(externalId) {
  const candidateUrls = [
    `api/pix/status?external_id=${encodeURIComponent(externalId)}`,
    `../api/pix/status?external_id=${encodeURIComponent(externalId)}`,
    `api/pix/status.php?external_id=${encodeURIComponent(externalId)}`,
    `../api/pix/status.php?external_id=${encodeURIComponent(externalId)}`,
    `api.php?action=status&external_id=${encodeURIComponent(externalId)}`,
    `../api.php?action=status&external_id=${encodeURIComponent(externalId)}`
  ];

  for (const url of candidateUrls) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      });
      const contentType = response.headers.get('content-type') || '';
      if (response.ok && contentType.includes('application/json')) {
        const text = await response.text();
        if (text && text.trim().startsWith('{')) {
          const data = JSON.parse(text);
          if (data && data.ok) {
            return data;
          }
        }
      }
    } catch (e) {}
  }

  // Fallback: consulta direta à BuckPay API via CORS
  try {
    const res = await fetch(`${BUCKPAY_CONFIG.baseUrl}/v1/transactions/external_id/${encodeURIComponent(externalId)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + BUCKPAY_CONFIG.token
      }
    });

    if (res.ok) {
      const data = await res.json();
      const remoteStatus = (data.status || data.data?.status || '').toLowerCase();
      const paid = ['paid', 'approved', 'completed', 'processed', 'success', 'pago'].includes(remoteStatus);
      return {
        ok: true,
        status: paid ? 'paid' : 'pending',
        paid: paid,
        external_id: externalId
      };
    }
  } catch (e) {}

  return { ok: true, status: 'pending', paid: false, external_id: externalId };
}

// Cronômetro Regressivo de 300 segundos (5 minutos)
function startCountdown(seconds = 300) {
  if (countdownTimer) clearInterval(countdownTimer);
  let remaining = seconds;

  const timerEl = $('pix-timer');
  const updateTimer = () => {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    if (timerEl) {
      timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    if (remaining <= 0) {
      clearInterval(countdownTimer);
      handlePixExpired();
    }
    remaining--;
  };

  updateTimer();
  countdownTimer = setInterval(updateTimer, 1000);
}

// Tratar expiração de Pix
function handlePixExpired() {
  if (pollingTimer) clearInterval(pollingTimer);
  if ($('pix-timer-wrapper')) $('pix-timer-wrapper').hidden = true;
  if ($('pix-code-container')) $('pix-code-container').hidden = true;
  if ($('pix-qr-container')) $('pix-qr-container').hidden = true;
  if ($('copy-pix')) $('copy-pix').hidden = true;
  if ($('check-payment')) $('check-payment').hidden = true;
  if ($('pix-steps-list')) $('pix-steps-list').hidden = true;
  if ($('pix-status')) $('pix-status').hidden = true;
  if ($('pix-expired-container')) $('pix-expired-container').hidden = false;
}

// Botão Gerar Novo Pix após expiração
if ($('btn-renew-pix')) {
  $('btn-renew-pix').onclick = () => {
    tentativa++;
    $('pix-expired-container').hidden = true;
    $('pix-result').hidden = true;
    $('checkout-form').hidden = false;
    $('pay-button').click();
  };
}

// Polling a cada 5 segundos
function startStatusPolling(externalId) {
  if (pollingTimer) clearInterval(pollingTimer);

  pollingTimer = setInterval(async () => {
    if (document.hidden) return;
    await queryStatus(externalId);
  }, 5000);
}

// Consultar status e atualizar UI
async function queryStatus(externalId, isManual = false) {
  if (checking || !externalId) return;
  checking = true;

  if (isManual && $('check-payment')) {
    $('check-payment').disabled = true;
    $('check-payment').textContent = 'VERIFICANDO…';
  }

  try {
    const res = await checkPixStatus(externalId);
    if (res.paid || res.status === 'paid') {
      handlePaymentConfirmed();
    } else {
      if (isManual && $('pix-status')) {
        $('pix-status').textContent = 'Pagamento ainda não identificado no sistema. Pode levar alguns instantes após o pagamento no app do banco.';
      }
    }
  } catch (e) {
    if (isManual && $('pix-status')) {
      $('pix-status').textContent = 'Aguardando pagamento. Faça o Pix no aplicativo do seu banco.';
    }
  } finally {
    checking = false;
    if (isManual && $('check-payment')) {
      $('check-payment').disabled = false;
      $('check-payment').textContent = 'JÁ PAGUEI — VERIFICAR PAGAMENTO';
    }
  }
}

// Estado Pago / Confirmado
function handlePaymentConfirmed() {
  if (countdownTimer) clearInterval(countdownTimer);
  if (pollingTimer) clearInterval(pollingTimer);

  if ($('pix-result-title')) $('pix-result-title').textContent = 'Pagamento Confirmado!';
  if ($('pix-timer-wrapper')) $('pix-timer-wrapper').hidden = true;
  if ($('pix-steps-list')) $('pix-steps-list').hidden = true;
  if ($('pix-qr-container')) $('pix-qr-container').hidden = true;
  if ($('pix-code-container')) $('pix-code-container').hidden = true;
  if ($('copy-pix')) $('copy-pix').hidden = true;
  if ($('check-payment')) $('check-payment').hidden = true;
  if ($('pix-status')) $('pix-status').hidden = true;
  if ($('pix-expired-container')) $('pix-expired-container').hidden = true;
  if ($('pix-success-container')) $('pix-success-container').hidden = false;

  try { sessionStorage.removeItem(storageKey); } catch (e) {}

  if (window.fbq) {
    try {
      window.fbq('track', 'Purchase', {
        value: freights[shipping].cents / 100,
        currency: 'BRL',
        content_name: 'Kit Bênção de São Bento'
      });
    } catch (e) {}
  }
}

// Exibir tela do PIX gerado
function showPixGeneratedScreen(data) {
  currentExternalId = data.external_id;

  $('checkout-form').hidden = true;
  $('pix-result').hidden = false;
  if ($('pix-expired-container')) $('pix-expired-container').hidden = true;
  if ($('pix-success-container')) $('pix-success-container').hidden = true;

  const qrEl = $('pix-qr');
  if (qrEl) {
    let qrSrc = data.qrcode || '';
    if (qrSrc && !qrSrc.startsWith('data:') && !qrSrc.startsWith('http')) {
      qrSrc = 'data:image/png;base64,' + qrSrc;
    }
    qrEl.src = qrSrc;
    qrEl.hidden = !qrSrc;
  }

  const codeEl = $('pix-code');
  if (codeEl) {
    codeEl.value = data.copia_cola || '';
  }

  $('copy-pix').disabled = !data.copia_cola;
  $('pix-status').textContent = 'Aguardando confirmação do pagamento na BuckPay…';

  startCountdown(300);
  startStatusPolling(data.external_id);
  window.scrollTo({ top: $('pix-result').offsetTop - 20, behavior: 'smooth' });
}

// Botão Copiar Pix
if ($('copy-pix')) {
  $('copy-pix').onclick = async () => {
    const code = $('pix-code').value;
    try {
      await navigator.clipboard.writeText(code);
      $('copy-pix').textContent = '✅ CÓDIGO PIX COPIADO! ABRA SEU BANCO';
      $('copy-pix').style.backgroundColor = '#047857';
      setTimeout(() => {
        $('copy-pix').textContent = 'COPIAR CÓDIGO PIX';
        $('copy-pix').style.backgroundColor = '#10b981';
      }, 4000);
    } catch (e) {
      $('pix-code').select();
      $('pix-status').textContent = 'Selecione e copie o código Pix acima.';
    }
  };
}

// Botão Verificar Pagamento Manual
if ($('check-payment')) {
  $('check-payment').onclick = () => {
    if (currentExternalId) {
      queryStatus(currentExternalId, true);
    }
  };
}

// Botão Alterar Dados
if ($('btn-edit-order')) {
  $('btn-edit-order').onclick = () => {
    if (countdownTimer) clearInterval(countdownTimer);
    if (pollingTimer) clearInterval(pollingTimer);
    $('checkout-form').hidden = false;
    $('pix-result').hidden = true;
    window.scrollTo({ top: $('checkout-form').offsetTop - 20, behavior: 'smooth' });
  };
}

// Submissão do Formulário Unificado
const checkoutForm = $('checkout-form');
if (checkoutForm) {
  checkoutForm.onsubmit = async e => {
    e.preventDefault();

    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

    const errors = [];

    // Nome
    const nameVal = $('name').value.trim();
    if (nameVal.length < 3 || !nameVal.includes(' ')) {
      errors.push({ el: $('name'), msg: 'Por favor, informe seu nome completo (com sobrenome).' });
    }

    // E-mail
    const emailVal = $('email').value.trim();
    if (!emailVal || !emailVal.includes('@') || !emailVal.includes('.')) {
      errors.push({ el: $('email'), msg: 'Informe um endereço de e-mail válido.' });
    }

    // Telefone
    const phoneVal = $('phone').value.replace(/\D/g, '');
    if (phoneVal.length < 10) {
      errors.push({ el: $('phone'), msg: 'Informe o telefone completo com DDD.' });
    }

    // CPF
    const docVal = $('document').value.replace(/\D/g, '');
    if (!cpfValid(docVal)) {
      errors.push({ el: $('document'), msg: 'Informe um CPF válido para identificação.' });
    }

    // CEP
    const cepVal = $('cep').value.replace(/\D/g, '');
    if (cepVal.length !== 8) {
      errors.push({ el: $('cep'), msg: 'Informe o CEP completo com 8 dígitos.' });
    }

    // Rua
    if (!$('street').value.trim()) {
      errors.push({ el: $('street'), msg: 'Informe o nome da sua rua / logradouro.' });
    }

    // Número
    if (!$('no-number').checked && !$('number').value.trim()) {
      errors.push({ el: $('number'), msg: 'Informe o número da residência ou marque S/N.' });
    }

    // Bairro
    if (!$('district').value.trim()) {
      errors.push({ el: $('district'), msg: 'Informe seu bairro.' });
    }

    // Cidade
    if (!$('city').value.trim()) {
      errors.push({ el: $('city'), msg: 'Informe sua cidade.' });
    }

    // Estado
    if (!$('state').value) {
      errors.push({ el: $('state'), msg: 'Selecione o estado (UF).' });
    }

    if (errors.length > 0) {
      const first = errors[0];
      first.el.classList.add('error');
      first.el.focus();
      first.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      alert(first.msg);
      return;
    }

    const payBtn = $('pay-button');
    payBtn.disabled = true;
    payBtn.textContent = 'GERANDO SEU PIX…';
    $('payment-message').textContent = 'Gerando cobrança oficial na BuckPay…';

    const payload = {
      amount: freights[shipping].cents,
      shipping: shipping,
      sessionId: getSessionId(),
      tentativa: tentativa,
      customer: {
        name: $('name').value.trim(),
        email: $('email').value.trim(),
        phone: $('phone').value.trim(),
        document: $('document').value.trim()
      },
      address: {
        cep: $('cep').value.trim(),
        street: $('street').value.trim(),
        number: $('no-number').checked ? 'S/N' : $('number').value.trim(),
        complement: $('complement').value.trim(),
        district: $('district').value.trim(),
        city: $('city').value.trim(),
        state: $('state').value
      },
      utmParams: Object.fromEntries(new URLSearchParams(window.location.search))
    };

    try {
      const result = await createBuckPayPix(payload);
      try {
        sessionStorage.setItem(storageKey, JSON.stringify(result));
      } catch (e) {}
      showPixGeneratedScreen(result);
    } catch (err) {
      alert('Não foi possível gerar a cobrança: ' + (err.message || 'Verifique sua conexão e tente novamente.'));
      $('payment-message').textContent = 'Ocorreu um erro ao gerar o Pix. Tente novamente.';
    } finally {
      payBtn.disabled = false;
      totals();
    }
  };
}

// Restaurar sessão salva se existir
try {
  const saved = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
  if (saved && saved.external_id && saved.copia_cola) {
    showPixGeneratedScreen(saved);
  }
} catch (e) {}

document.addEventListener('DOMContentLoaded', () => {
  totals();
});
