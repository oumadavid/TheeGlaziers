const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // ✅ Import path module

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve static files from React build folder
app.use(express.static(path.join(__dirname, "../client/build")));

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// ✅ Catch-all route for SPA
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Root route (optional)
app.get("/", (req, res) => {
    res.send("Highland Glaziers Backend is running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
