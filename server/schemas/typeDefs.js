const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
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
    post(_id: ID!): post
    posts: [Post]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postBody: String!): Post
    follow(userId: ID!, username: String!): User
    deleteUser(userId: ID!): User
    unfollow(userId: ID!): User
    deletePost(postId: ID!): User
  }
`;

module.exports = typeDefs;
