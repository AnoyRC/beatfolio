const jwt = require('jsonwebtoken');
require('dotenv').config();
const nacl = require('tweetnacl');
const bs58 = require('bs58');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token'); // Check if not token

  if (!token) {
    return res.status(401).json({
      msg: 'No token, authorization denied',
    });
  } // Verify token

  const address = req.header('x-address');

  if (!address) {
    return res.status(401).json({
      msg: 'No address, authorization denied',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const signature = decoded.signature;
    const message = process.env.MESSAGE;

    const verified = nacl.sign.detached.verify(
      new TextEncoder().encode(message),
      bs58.decode(signature),
      bs58.decode(address)
    );

    if (!verified) {
      return res.status(401).json({
        msg: 'Invalid signature',
      });
    }

    req.address = address;

    next();
  } catch (err) {
    res.status(401).json({
      msg: 'Token is not valid',
    });
  }
};
