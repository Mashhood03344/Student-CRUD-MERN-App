// backend/config.js

const crypto = require('crypto');

// Generate a random secret key
const generateRandomKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

module.exports = {
  secret: generateRandomKey(),
};
