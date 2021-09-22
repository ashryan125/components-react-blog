const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
<<<<<<< HEAD
    firstname: String
    lastname: String
=======
>>>>>>> be0ba231971f7ecd1a80941a631d1fda57d63ba7
    username: String
    email: String
    password: String
    followers: [User]
    following: [User]
    posts: [Post]
  }

  type Post {
    _id: ID
    postTitle: String
    username: String
    postBody: String
<<<<<<< HEAD
=======
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createAt: String
    username: String
>>>>>>> be0ba231971f7ecd1a80941a631d1fda57d63ba7
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    followers(username: String): [User]
    following(username: String): [User]
<<<<<<< HEAD
    post(_id: ID!): post
    posts: [Post]
=======
    posts(username: String): [Post]
    post(_id: ID): Post
>>>>>>> be0ba231971f7ecd1a80941a631d1fda57d63ba7
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postBody: String!): Post
<<<<<<< HEAD
    follow(followId: ID!, username: String!): User
    following(followingId: ID!,currentUserId: ID!, username: String!): User
=======
    addComment(postId: ID!, commentBody: String!): Post
    addFollow(followId: ID!, username: String!): User
    addFollowing(followingId: ID!,currentUserId: ID!, username: String!): User
>>>>>>> be0ba231971f7ecd1a80941a631d1fda57d63ba7
    deleteUser(userId: ID!): User
    unfollow(userId: ID!): User
    deletePost(postId: ID!): User
  }
`;

module.exports = typeDefs;
