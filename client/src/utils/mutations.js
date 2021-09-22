import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postTitle: String!, $postText: String!) {
    addPost(postTitle: $postTitle, postText: $postText) {
      _id
      postText
      postTitle
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql `
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_FOLLOW = gql`
mutation addFollow($id: ID!){
    addFollow(followId: $followId) {
        _id
        username
        follow {
            _id
            username
        }
    }
}
`;

export const DELETE_USER = gql`
mutation deleteUser($userId: ID!){
    deleteUser(userId: $userId) {
        _id
        username
        email
    }
}
`;

export const UNFOLLOW = gql`
mutation unfollow($unfollowId: ID!){
    unfollow(unfollowId: $unfollowId) {
        _id
        username
        unfollow {
            _id
            username
        }
    }
}
`;

export const DELETE_POST = gql`
mutation deletePost($postText: ID!){
    deletePost(postText: $postText) {
        _id
        username
        addPosts {
            _id
        }
    }
}
`;