const express = require('express');
const router = express.Router();
const { sendOwnerNotification, sendUserConfirmation } = require('../utils/mailer');

router.post("/", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        await sendOwnerNotification({ name, email, phone, message });
        await sendUserConfirmation({ name, email, message });

        res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
        console.error("Email error:", error);
        res.status(500).json({ error: "Failed to send emails" });
    }
});

module.exports = router;