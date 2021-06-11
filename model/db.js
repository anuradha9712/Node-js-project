const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  userName : {type: String, unique: true},
  followers: [],
  following: [],
  posts: {
    postId: Number,
    caption: String,
    imageUrl: { type: String, required: true},
    upvotes: {type: Number, default: 0}
  }
});

module.exports = mongoose.model("Blog", blogSchema);