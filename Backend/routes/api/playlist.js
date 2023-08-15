const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Playlist = require("../../models/playlists");

router.post(
  "/create",
  [check("name", "Name is required").not().isEmpty(), auth],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const newPlaylist = new Playlist({
        name: req.body.name,
        address: req.body.address,
        songs: [],
      });
      await newPlaylist.save();
      res.json(newPlaylist);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.get("/all", async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.json(playlists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/:address", async (req, res) => {
  try {
    const playlists = await Playlist.find({ address: req.params.address });
    res.json(playlists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/add/:playlistId/:songId", auth, async (req, res) => {
  try {
    const selectedPlaylist = await Playlist.findOne({
      playlistId: req.params.playlistId,
    });
    const songs = selectedPlaylist.songs;
    songs.push(req.params.songId);
    selectedPlaylist.songs = songs;
    await selectedPlaylist.save();
    res.json(selectedPlaylist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/remove/:playlistId/:songId", auth, async (req, res) => {
  try {
    const selectedPlaylist = await Playlist.findOne({
      playlistId: req.params.playlistId,
    });

    const songs = selectedPlaylist.songs;
    songs.splice(songs.indexOf(req.params.songId), 1);
    selectedPlaylist.songs = songs;
    await selectedPlaylist.save();
    res.json(selectedPlaylist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
