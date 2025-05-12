
// require('dotenv').config(); // Load environment variables first

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const authRoutes = require('./routes/authRoutes');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/api/auth', authRoutes);

// // Debug: Log the Mongo URI (remove this in production)
// console.log('Connecting to MongoDB URI:', process.env.MONGO_URI);

// // Database connection (cleaned up for Mongoose v7+)
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(5000, () => console.log('Server running on port 5000'));
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err.message);
//   });



require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Debug log
console.log('Connecting to MongoDB URI:', process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });
