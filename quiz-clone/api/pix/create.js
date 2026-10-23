export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    let input = req.body;
    if (typeof input === 'string') {
      try { input = JSON.parse(input); } catch (e) {}
    }
    input = input || {};

    const shippingRates = { pac: 1268, sedex: 1375, express: 1743 };
    const shippingType = (input.shipping || 'pac').toLowerCase().trim();
    const amount = shippingRates[shippingType] || Number(input.amount) || 1268;

    const rawSessionId = input.sessionId || input.orderId || '';
    const sessionId = rawSessionId.replace(/[^a-zA-Z0-9_-]/g, '') || ('sess_' + Math.random().toString(36).substring(2, 10));
    const tentativa = Math.max(1, parseInt(input.tentativa, 10) || 1);
    const external_id = `${sessionId}_${amount}_${tentativa}`;

    const customer = input.customer || input.buyer || {};
    let phoneClean = (customer.phone || '').replace(/\D/g, '');
    if (phoneClean.length === 10 || phoneClean.length === 11) {
      phoneClean = '55' + phoneClean;
    }
    if (phoneClean.length < 12) phoneClean = '5511999998888';

    let docClean = (customer.document || '').replace(/\D/g, '');
    if (docClean.length !== 11) docClean = '32024955851';

    const u = input.utmParams || input.attribution || {};
    const tracking = {
      ref: String(u.ref || u.utm_source || ''),
      src: String(u.src || u.utm_source || ''),
      sck: String(u.sck || u.xcod || ''),
      utm_source: String(u.utm_source || ''),
      utm_medium: String(u.utm_medium || ''),
      utm_campaign: String(u.utm_campaign || ''),
      utm_id: String(u.utm_id || ''),
      utm_term: String(u.utm_term || ''),
      utm_content: String(u.utm_content || '')
    };

    const payload = {
      payment_method: 'pix',
      amount: amount,
      external_id: external_id,
      buyer: {
        name: customer.name || 'Cliente São Bento',
        email: customer.email || 'contato@saobento.com.br',
        phone: phoneClean,
        document: docClean
      },
      tracking: tracking,
      metadata: {
        shipping: shippingType,
        product: 'Kit Bênção de São Bento',
        address: input.address || {}
      }
    };

    const token = process.env.BUCKPAY_TOKEN || 'sk_live_e77fe478f994c90fb5951f6c396adfb6';
    const baseUrl = process.env.BUCKPAY_BASE_URL || 'https://api.realtechdev.com.br';

    const response = await fetch(`${baseUrl}/v1/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'Buckpay API'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok && response.status !== 201) {
      return res.status(response.status || 400).json({
        error: data.message || data.error || 'Falha na comunicação com a API de pagamento BuckPay',
        detail: data
      });
    }

    const qrCodeData = data.data?.pix?.qrcode_base64 || data.qrcode || '';
    const copiaColaData = data.data?.pix?.code || data.copia_cola || '';

    return res.status(200).json({
      success: true,
      ok: true,
      status: 'pending',
      paid: false,
      external_id: external_id,
      amount: amount,
      amount_formatted: 'R$ ' + (amount / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
      qrcode: qrCodeData,
      copia_cola: copiaColaData,
      expires_at: new Date(Date.now() + 300000).toISOString()
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Erro interno no servidor' });
  }
}
