import React from 'react';

function PostList ({title}) {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default PostList;
