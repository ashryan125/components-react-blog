import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
      _id
      username
      email
      followingCount
      followersCount
      posts {
        _id
        postTitle
        postBody
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
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
      followingCount
      followersCount
      follow {
        _followId
        username
      }
      followers {
        _followerId
        username
      }
      posts {
        _id
        postTitle
        postBody
        createdAt
        commentCount
      }
    }
  }
`;

export const QUERY_POSTS = gql`
query posts($username: String) {
  posts(username: $username) {
      _id
      postTitle
      postBody
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postTitle
      postBody
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

