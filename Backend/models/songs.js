const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  songId: {
    type: String,
    required: true,
  },
  likes: {
    type: [String],
    required: true,
  },
});

module.exports = Song = mongoose.model('song', SongSchema);
