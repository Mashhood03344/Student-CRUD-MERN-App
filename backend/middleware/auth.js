// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token || token === 'undefined') {
    return res.status(403).json({
      auth: false,
      message: 'No valid token provided.',
      status: 403,
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(500).json({
        auth: false,
        message: 'Failed to authenticate token.',
        status: 500,
      });
    }

    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
