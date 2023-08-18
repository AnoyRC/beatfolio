const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  following: {
    type: [String],
    required: true,
  },
  likedSongs: {
    type: [String],
  },
  playlists: {
    type: [String],
  },
});

module.exports = User = mongoose.model('user', UserSchema);
