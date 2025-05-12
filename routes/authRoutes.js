// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// router.post('/signup', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ msg: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({ email, password: hashedPassword });

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.json({ token, user: { email: newUser.email } });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.json({ token, user: { email: user.email } });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });

// module.exports = router;

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Ensure that the User model is defined correctly
// require('dotenv').config(); // Load environment variables from .env file

// const router = express.Router();

// // Signup Route
// router.post('/signup', async (req, res) => {
//   const { email, password } = req.body;

//   // Check if the email is provided and is not empty
//   if (!email || !password) {
//     return res.status(400).json({ msg: "Please provide both email and password" });
//   }

//   try {
//     // Check if the user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ msg: "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the new user
//     const newUser = new User({
//       email,
//       password: hashedPassword
//     });

//     // Save the user to the database
//     await newUser.save();

//     // Create a JWT token
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     // Send the token and user data as a response
//     res.status(201).json({ token, user: { email: newUser.email } });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error. Please try again later." });
//   }
// });

// // Login Route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Check if the email and password are provided
//   if (!email || !password) {
//     return res.status(400).json({ msg: "Please provide both email and password" });
//   }

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: "User not found" });
//     }

//     // Compare the hashed password with the provided password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Invalid credentials" });
//     }

//     // Generate a new JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     // Send the token and user data as a response
//     res.json({ token, user: { email: user.email } });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error. Please try again later." });
//   }
// });

// module.exports = router;

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// require('dotenv').config();

// const router = express.Router();

// // Hardcoded credentials (for testing/demo purposes only)
// const testEmail = 'sundarlingam272000@gmail.com';
// const testPassword = 'Sudharsen';

// // Signup Route (creates the user if not exists)
// router.post('/signup', async (req, res) => {
//   const email = testEmail;
//   const password = testPassword;

//   if (!email || !password) {
//     return res.status(400).json({ msg: "Please provide both email and password" });
//   }

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ msg: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.status(201).json({ token, user: { email: newUser.email } });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error. Please try again later." });
//   }
// });

// // Login Route (logs in the hardcoded user)
// router.post('/login', async (req, res) => {
//   const email = testEmail;
//   const password = testPassword;

//   if (!email || !password) {
//     return res.status(400).json({ msg: "Please provide both email and password" });
//   }

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Invalid credentials" });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token, user: { email: user.email } });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error. Please try again later." });
//   }
// });

// module.exports = router;

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// require('dotenv').config();

// const router = express.Router();

// // Hardcoded credentials (for testing/demo purposes only)
// const testEmail = 'sundarlingam272000@gmail.com';
// const testPassword = 'Sudharsen';

// // Signup Route
// router.post('/signup', async (req, res) => {
//   const email = testEmail;
//   const password = testPassword;

//   if (!email || !password) {
//     return res.status(400).json({ msg: "Please provide both email and password" });
//   }

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ msg: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.status(201).json({ token, user: { email: newUser.email } });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error. Please try again later." });
//   }
// });

// // Login Route
// router.post('/login', async (req, res) => {
//   const email = testEmail;
//   const password = testPassword;

//   if (!email || !password) {
//     return res.status(400).json({ msg: "Please provide both email and password" });
//   }

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Invalid credentials" });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token, user: { email: user.email } });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error. Please try again later." });
//   }
// });

// module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;  // Dynamically get email and password from the request body

  if (!email || !password) {
    return res.status(400).json({ msg: "Please provide both email and password" });
  }

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Create JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ token, user: { email: newUser.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;  // Dynamically get email and password from the request body

  if (!email || !password) {
    return res.status(400).json({ msg: "Please provide both email and password" });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // Compare password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
});

module.exports = router;
