const { Schema, model } = require('mongoose');
<<<<<<< HEAD
=======
const commentSchema = require('./Comment');
>>>>>>> be0ba231971f7ecd1a80941a631d1fda57d63ba7
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: 'Post needs title',
      minlength: 1,
      maxlength: 280
    },
<<<<<<< HEAD
    thoughtBody: {
      type: String,
      required: 'Post needs text',
      minlength: 1,
      maxlength: 280
=======
    postBody: {
      type: String,
      required: 'Post needs text',
      minlength: 1,
      maxlength: 1000
>>>>>>> be0ba231971f7ecd1a80941a631d1fda57d63ba7
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
<<<<<<< HEAD
    }
=======
    },
    comments: [commentSchema]
>>>>>>> be0ba231971f7ecd1a80941a631d1fda57d63ba7
  },
  {
    toJSON: {
      getters: true
    }
  }
);

<<<<<<< HEAD
=======
postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

>>>>>>> be0ba231971f7ecd1a80941a631d1fda57d63ba7
const Post = model('Post', postSchema);

module.exports = Post;
