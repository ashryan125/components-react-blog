import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const CommentList = ({ comments }) => {
=======
function CommentList({ comments }){
>>>>>>> cb99bc34c7cc270a79f47a28c0f642ac97a03e3b
    return(
        <div className="card mb-3">
            <div className="card-header bg-secondary">
                <span className="text-light" style={{ fontWeight: 700 }}>Comments</span>
            </div>
            <div className="card-body">
                {comments &&
                    comments.map(comment => (
                        <p className="comment-background" key={comment._id}>
                            {comment.commentBody}
                            <div>
                            <Link to={`/profile/${comment.username}`} className='comment-poster'>
                                {comment.username} on {comment.createdAt}
                            </Link>
                            </div>
                        </p>
                    ))}
            </div>
        </div>
    );
};

export default CommentList;