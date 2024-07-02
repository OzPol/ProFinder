// lib/sendEmail.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

/* Notifications Backlog:
Backend:
    Set up email sending using a service like SendGrid or Nodemailer.
    Create API endpoints for managing notification preferences.

Frontend:
    Create a notifications preferences page.
    Implement UI for displaying notifications. */
