// backend/routes/login.routes.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({
        auth: false,
        message: 'Invalid credentials.',
        status: 401,
      });
    }

    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, // Expires in 24 hours
    });

    res.status(200).json({
      auth: true,
      token,
    });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({
      auth: false,
      message: 'Internal server error.',
      status: 500,
    });
  }
});

module.exports = router;
