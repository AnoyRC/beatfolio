const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Song = require('../../models/songs');
const User = require('../../models/users');

router.post('/like/:songId', auth, async (req, res) => {
  try {
    const selectedSong = Song.findOne({ songId: req.params.songId });

    if (selectedSong) {
      const likes = selectedSong.likes;

      likes.push(req.address);
      selectedSong.likes = likes;

      await selectedSong.save();

      const selectedUser = User.findOne({ address: req.address });
      const likedSongs = selectedUser.likedSongs;

      likedSongs.push(req.params.songId);
      selectedUser.likedSongs = likedSongs;

      await selectedUser.save();

      res.json(selectedSong);
    } else {
      const newSong = new Song({
        songId: req.params.songId,
        likes: [req.address],
      });
      await newSong.save();

      const selectedUser = User.findOne({ address: req.address });
      const likedSongs = selectedUser.likedSongs;

      likedSongs.push(req.params.songId);
      selectedUser.likedSongs = likedSongs;

      await selectedUser.save();

      res.json(newSong);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/unlike/:songId', auth, async (req, res) => {
  try {
    const selectedSong = Song.findOne({ songId: req.params.songId });

    if (selectedSong) {
      const likes = selectedSong.likes;

      likes.splice(likes.indexOf(req.address), 1);
      selectedSong.likes = likes;

      await selectedSong.save();

      const selectedUser = User.findOne({ address: req.address });
      const likedSongs = selectedUser.likedSongs;

      likedSongs.splice(likedSongs.indexOf(req.params.songId), 1);
      selectedUser.likedSongs = likedSongs;

      await selectedUser.save();

      res.json(selectedSong);
    } else {
      const newSong = new Song({
        songId: req.params.songId,
        likes: [],
      });
      await newSong.save();

      const selectedUser = User.findOne({ address: req.address });
      const likedSongs = selectedUser.likedSongs;

      likedSongs.splice(likedSongs.indexOf(req.params.songId), 1);
      selectedUser.likedSongs = likedSongs;

      await selectedUser.save();

      res.json(newSong);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/likes/:songId', async (req, res) => {
  try {
    const selectedSong = Song.findOne({ songId: req.params.songId });

    if (selectedSong) {
      res.json(selectedSong.likes);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
