const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendOwnerNotification = async (formData) => {
  await resend.emails.send({
    from: "Highland Glaziers <onboarding@resend.dev>", // or a verified domain if set up
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
  await resend.emails.send({
    from: "Highland Glaziers <onboarding@resend.dev>",
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
  sendUserConfirmation
};
