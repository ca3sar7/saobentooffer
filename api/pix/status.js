export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const external_id = String(req.query.external_id || '').replace(/[^a-zA-Z0-9_-]/g, '');

  if (!external_id) {
    return res.status(400).json({ ok: false, error: 'external_id é obrigatório' });
  }

  const token = process.env.BUCKPAY_TOKEN || 'sk_live_e77fe478f994c90fb5951f6c396adfb6';
  const baseUrl = process.env.BUCKPAY_BASE_URL || 'https://api.realtechdev.com.br';

  try {
    const response = await fetch(`${baseUrl}/v1/transactions/external_id/${encodeURIComponent(external_id)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'Buckpay API'
      }
    });

    if (response.ok) {
      const data = await response.json();
      const remoteStatus = String(data.status || data.data?.status || '').toLowerCase();
      const paid = ['paid', 'approved', 'completed', 'processed', 'success', 'pago'].includes(remoteStatus);
      return res.status(200).json({
        ok: true,
        status: paid ? 'paid' : 'pending',
        paid: paid,
        external_id: external_id
      });
    }

    return res.status(200).json({
      ok: true,
      status: 'pending',
      paid: false,
      external_id: external_id
    });
  } catch (err) {
    return res.status(200).json({
      ok: true,
      status: 'pending',
      paid: false,
      external_id: external_id
    });
  }
}
