const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
require('dotenv').config();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('../../models/users');

router.post(
  '/',
  [
    check('address', 'Address is required').not().isEmpty(),
    check('signature', 'Signature is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { address, signature } = req.body;

    try {
      const user = await User.findOne({ address });

      if (!user) {
        const newUser = new User({
          address,
          following: [],
        });
        await newUser.save();
      }

      const payload = {
        signature,
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/', auth, async (req, res) => {
  try {
    res.json({ msg: 'Logged In' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
