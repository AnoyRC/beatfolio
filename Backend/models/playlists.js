const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  songs: {
    type: [String],
    required: true,
  },
});

module.exports = Playlist = mongoose.model('playlist', PlaylistSchema);
