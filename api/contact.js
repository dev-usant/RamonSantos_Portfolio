export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { Nome, "E-mail": Email, Assunto, Mensagem } = req.body;

    if (!Nome || !Email || !Mensagem) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured in Vercel Environment Variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Call Resend API using standard fetch
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Free tier allows sending from onboarding@resend.dev
        to: 'santdevoficial@gmail.com', // Replace with your verified domain email later if needed
        subject: `[Portfolio] ${Assunto || 'Novo Contato'}`,
        html: `
          <h3>Nova mensagem do seu Portfólio!</h3>
          <p><strong>Nome:</strong> ${Nome}</p>
          <p><strong>E-mail:</strong> ${Email}</p>
          <p><strong>Assunto:</strong> ${Assunto || 'Não informado'}</p>
          <hr>
          <p><strong>Mensagem:</strong></p>
          <p>${Mensagem.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: Email
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      console.error('Resend API Error:', data);
      return res.status(response.status).json({ error: 'Failed to send email', details: data });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
