const { gql } = require("apollo-server-express");

// need to update Users following to new table Follows: https://hasura.io/blog/instagram-clone-react-graphql-hasura-part1/

// https://github.com/abhi40308/instagram-clone/blob/master/src/components/Follow.js

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
    postText: String
    username: String
    createdAt: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
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
    addPost(postTitle: String!, postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    deleteUser(userId: ID!): User
    deletePost(postId: ID!): User
  }
`;

module.exports = typeDefs;
