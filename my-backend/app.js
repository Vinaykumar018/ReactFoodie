const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const dotenv = require("dotenv");
const path = require("path");

// Specify the path to your .env file
const dotenvPath = path.resolve(__dirname, "secret.env");

// Load environment variables from the .env file
const dot = dotenv.config({ path: dotenvPath });

// Access the environment variables
const baseUrl = process.env.BASE_URL;
console.log(baseUrl)
const db = process.env.DATABASE;
console.log(db);

const app = express();
const cors = require('cors');
app.use(express.json());
const allowedOrigins = ['http://127.0.0.1:5173']; // Add your allowed origins here
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Connect to MongoDB
mongoose.connect(`${db}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.use(`/`, authRoutes);

const PORT = process.env.PORT || 6020;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
