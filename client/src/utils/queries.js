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
<<<<<<< HEAD
        postTitle
        postBody
=======
        postText
>>>>>>> fcc6cfc5d7b5432f8586731a68b19e20b6beffcc
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
      followers {
          _followersId
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
      following {
        _followingId
        username
      }
      followers {
        _followersId
        username
      }
      posts {
        _id
<<<<<<< HEAD
        postTitle
        postBody
=======
        postText
>>>>>>> fcc6cfc5d7b5432f8586731a68b19e20b6beffcc
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
<<<<<<< HEAD
      postTitle
      postBody
=======
      postText
>>>>>>> fcc6cfc5d7b5432f8586731a68b19e20b6beffcc
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
<<<<<<< HEAD
      postTitle
      postBody
=======
      postText
>>>>>>> fcc6cfc5d7b5432f8586731a68b19e20b6beffcc
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

