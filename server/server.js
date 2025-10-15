const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Corrected path to Vite's build output
app.use(express.static(path.join(__dirname, "../client/dist")));

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// ✅ Catch-all route for React Router (also using correct path)
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Root route
app.get("/", (req, res) => {
    res.send("Highland Glaziers Backend is running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
