const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,       // your full gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // 16-character App Password (not your regular password)
  },
});

const sendOwnerNotification = async (formData) => {
  await transporter.sendMail({
    from: `"Highland Glaziers" <${process.env.GMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: "New Quote Request from website",
    html: `
      <h2>New Quote Request Received</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${formData.message}</blockquote>
    `,
  });
};

const sendUserConfirmation = async (formData) => {
  await transporter.sendMail({
    from: `"Highland Glaziers" <${process.env.GMAIL_USER}>`,
    to: formData.email,
    subject: "Quote request Received",
    html: `
      <h2>Thank you for reaching out!</h2>
      <p>We have received your quote request. Our team will get back to you within 24 hours.</p>
      <blockquote>${formData.message}</blockquote>
      <p>Warm regards,<br/>Highland Glaziers Team</p>
    `,
  });
};

module.exports = {
  sendOwnerNotification,
  sendUserConfirmation,
};