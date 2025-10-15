const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

app.get("/", (req, res) => {
    res.send("Highland Glaziers Backend is running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});