import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {

  // if(!posts.length) {
  //   return <h3>No Posts Yet</h3>
  // }

  return (
      <div className='card mt-5'>
        <div className='card-body bg-secondary'>
          {posts &&
            posts.slice(0, 5).map(post => (
            
              <div key={post._id} className="card mb-3">
                <p className="card-header">
                  <Link
                    to={`/profile/${post.username}`}
                    style={{ fontWeight: 700, textDecoration: 'none' }}
                  
                    className="text-dark post"
                  >
                    {post.username}
                  </Link>{' '}
                  posted on {post.createdAt}
                </p>
                <div className="card-body">

                  <Link to={`/post/${post._id}`}  style={{ textDecoration: 'none' }}>
                  <h4 className="card-header text-dark post">{post.postTitle}</h4>
                    <p className='text-dark post-text'>{post.postText}</p>
                    <p className="mb-0 post text-dark">

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
