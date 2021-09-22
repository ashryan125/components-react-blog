const faker = require('faker');

const db = require('../config/connection');
const { Post, User } = require('../models');

db.once('open', async () => {
    
    await Post.deleteMany({});
    await User.deleteMany({});
  
    // create user data
    const userData = [];
  
    for (let i = 0; i < 50; i += 1) {
      const username = faker.internet.userName();
      const email = faker.internet.email(username);
      const password = faker.internet.password();

      userData.push({ username, email, password });
    }
    console.log('users seeded');

    const createdUsers = await User.collection.insertMany(userData);
  
    // UPDATED FOR FOLLOWERS!!!
    // create followers
    for (let i = 0; i < 100; i += 1) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const { _id: userId } = createdUsers.ops[randomUserIndex];
  
      let followerId = userId;
  
      while (followerId === userId) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        followerId = createdUsers.ops[randomUserIndex];
      }
  
      await User.updateOne({ _id: userId }, { $addToSet: { followers: followerId } });
    }

    console.log('followers seeded')

       // create following
       for (let i = 0; i < 100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { _id: userId } = createdUsers.ops[randomUserIndex];
    
        let followingId = userId;
    
        while (followingId === userId) {
          const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
          followingId = createdUsers.ops[randomUserIndex];
        }
    
        await User.updateOne({ _id: userId }, { $addToSet: { following: followingId } });
      }
  
      console.log('following seeded')
  
    // create Posts
    let createdPosts = [];
    for (let i = 0; i < 100; i += 1) {
      const postTitle = faker.lorem.words(Math.round(Math.random() * 20) + 1);
      const postBody = faker.lorem.words(Math.round(Math.random() * 100) + 1);
  
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const { username, _id: userId } = createdUsers.ops[randomUserIndex];
  
      const createdPost = await Post.create({ postTitle, postBody, username });
  
      const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { Posts: createdPost._id } }
      );
  
      createdPosts.push(createdPost);
    }

    console.log('posts seeded');
  
    // create comments
    for (let i = 0; i < 100; i += 1) {
      const commentBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);
  
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const { username } = createdUsers.ops[randomUserIndex];
  
      const randomPostIndex = Math.floor(Math.random() * createdPosts.length);
      const { _id: PostId } = createdPosts[randomPostIndex];
  
      await Post.updateOne(
        { _id: PostId },
        { $push: { comments: { commentBody, username } } },
        { runValidators: true }
      );
    }

    console.log('comments seeded')
  
    console.log('all seeds done!');
    process.exit(0);
  });