const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

const sendOwnerNotification = async (formData) =>{
    const mailOptions = {
        from: `"Quote Request" <${process.env.EMAIL_USER}>`,
        to: process.env.OWNER_EMAIL,
        subject: "New Quote Request from website",
        html: `
            <h2>New Quote Request Received</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
            <p><strong>Message:</strong></p>
        `,
    };

    await transporter.sendMail(mailOptions);
};

const sendUserConfirmation = async (formData) => {
    const mailOptions = {
        from: `"Highland Glaziers" <${process.env.EMAIL_USER}>`,
        to: formData.email,
        subject: "Quote request Received",
        html: `
            <h2> Thank you for reaching out!</h2>
            <p>We have received your quote request. Our team will get back to you within 24 hours.</p>
            <blockquote>${formData.message}</blockquote>
            <p>Warm regards,<br/>Highland Glaziers Team</p>
        `,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = {
    sendOwnerNotification,
    sendUserConfirmation
};