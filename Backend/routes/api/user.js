const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/users');

router.get('/following/:address', async (req, res) => {
  try {
    User.findOne(
      { address: req.params.address }.then((user) => {
        res.json(user.following);
      })
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/followers/:address', async (req, res) => {
  try {
    User.find({ following: req.params.address }).then((users) => {
      res.json(users);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/follow/:address', auth, async (req, res) => {
  try {
    const user = await User.findOne({ address: req.address });
    const following = user.following;

    following.push(req.params.address);
    user.following = following;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/unfollow/:address', auth, async (req, res) => {
  try {
    const user = await User.findOne({ address: req.address });
    const following = user.following;

    following.splice(following.indexOf(req.params.address), 1);
    user.following = following;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
