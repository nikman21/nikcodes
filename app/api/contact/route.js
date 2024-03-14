import nodemailer from 'nodemailer';
import aws from 'aws-sdk';


// Initialize AWS SES transporter
const transporter = nodemailer.createTransport({
  SES: new aws.SES({
    apiVersion: '2010-12-01',
    region: 'us-west-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }),
});



export async function POST(req) {
    const { name, email, message } = await req.json();
    try {
      // Send email
      await transporter.sendMail({
        from: 'nikolas.manuel13@gmail.com', // Must be a verified sender in SES
        to: 'nikolas.manuel13@gmail.com', // Your recipient
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
        html: `<html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 5px;
              background: #f9f9f9;
            }
            .header {
              background-color: #f2f2f2;
              padding: 10px;
              text-align: center;
              border-bottom: 1px solid #ddd;
            }
            .content {
              padding: 20px;
            }
            .footer {
              text-align: center;
              padding: 10px;
              background-color: #f2f2f2;
              border-top: 1px solid #ddd;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
            <div class="footer">
              <p>Contact them back at ${email}</p>
            </div>
          </div>
        </body>
        </html>>`,
      });

      return new Response('Email sent', { status: 200 });
    } catch (error) {
      console.error('Failed to send email:', error);
      return new Response('Failed to send email', { status: 500 });
    }
}

  