const sgMail = require('@sendgrid/mail');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, topic, contactPerson } = req.body;
    
    // Set your SendGrid API key from environment variable
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'your-email@snshn.com', // Replace with your actual email
      from: 'noreply@snshn.com', // Must be verified in SendGrid
      subject: `New Contact from ${name} - ${topic}`,
      text: `
        New contact form submission:
        
        Topic: ${topic}
        Contact Person Requested: ${contactPerson}
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Submitted at: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #facc15;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Topic:</strong> ${topic}</p>
            <p><strong>Requested Contact:</strong> ${contactPerson}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3>Contact Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    await sgMail.send(msg);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}