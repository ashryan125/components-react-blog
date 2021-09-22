const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
 
    posts: [Post]
  }

  type Post {
    _id: ID
    postTitle: String
    postBody: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    
    posts(username: String): [Post]
    post(_id: ID): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postBody: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    addFollow(followId: ID!, username: String!): User
    addFollowing(followingId: ID!,currentUserId: ID!, username: String!): User
    deleteUser(userId: ID!): User
    unfollow(userId: ID!): User
    deletePost(postId: ID!): User
  }
`;

module.exports = typeDefs;
