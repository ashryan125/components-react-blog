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
      postBody
      createdAt
      username
    }
  }
`;

export const FOLLOW = gql`
mutation follow($followId: ID!){
    follow(followId: $followId) {
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