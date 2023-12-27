const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const myticketRoutes = require('./routes/tickets.route.js');

// Applying app express
const app = express();

// Middlewares to parse JSON
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error!';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Middlewares to allow CORS
app.use(
  cors({
    origin: 'https://public-ideas-information.onrender.com/', 
    credentials: true,
  })
);

// Connecting to MongoDB
const urlmongoDB = process.env.MONGODB_URL;
mongoose
  .connect(urlmongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log('Congratulations! Now you are live on MongoDB service at port:', 5000);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Adding APIs routes to the app...
app.use('/api', myticketRoutes);