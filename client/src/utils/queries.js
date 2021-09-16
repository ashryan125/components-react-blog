import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
      _id
      username
      email
      posts {
        _postId
        postBody
        createdAt
      }
      follow {
          _followId
          username
       }
      following {
          _followingId
          username
      }
    }
}
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      follow {
        _followId
        username
      }
      posts {
        _postId
        postbody
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
query posts($username: String) {
  posts(username: $username) {
      _postId
      postBody
      createdAt
      username
    }
  }
`;

export const QUERY_POST = gql`
  query post($postId: ID!) {
    post(_postId: $postId) {
      _postId
      postBody
      createdAt
      username
    }
  }
`;

