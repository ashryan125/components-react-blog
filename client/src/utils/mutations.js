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
  mutation addUser($firstname: String! $lastname: String! $username: String!, $email: String!, $password: String!) {
    addUser(firstname: $firstname lastname: $lastname username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postBody: String!) {
    addPost(postBody: $postBody) {
      _id
      postTitle
      postBody
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
mutation addFollow($followId: ID!){
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
mutation deletePost($postBody: ID!){
    deletePost(postBody: $postBody) {
        _id
        username
        addPosts {
            postId
        }
    }
}
`;