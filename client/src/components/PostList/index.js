import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts, title }) {

  if(!posts.length) {
    return <h3>No Posts Yet</h3>
  }

  return (
      <div className='card mt-5'>
        <h4 className="card-header bg-dark text-white title-fonts">{title}</h4>
        <div className='card-body bg-secondary'>
          {posts &&
            posts.map(post => (
              <div key={post._id} className="card mb-3">
                <p className="card-header">
                  <Link
                    to={`/profile/${post.username}`}
                    style={{ fontWeight: 700 }}
                    className="text-light"
                  >
                    {post.username}
                  </Link>{' '}
                  post on {post.createdAt}
                </p>
                <div className="card-body">
                  <Link to={`/post/${post._id}`}>
                    <p>{post.postText}</p>
                    <p className="mb-0">
                      Comments: {post.commentCount} || Click to{' '}
                      {post.commentCount ? 'see' : 'start'} the discussion!
                    </p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
  );
};

export default PostList;
