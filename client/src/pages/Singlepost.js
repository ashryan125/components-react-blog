import React from 'react';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';


function SinglePost() {
    const { id: postId } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId }
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container-xxl'>
            <div className="card mt-3 mb-3 border-0">
                <p className="card-header bg-secondary text-white-50">
                    <span style={{ fontWeight: 700 }} className="text-white post">
                        {post.username}
                    </span>{' '}
                    posted on {post.createdAt}
                </p>
                <div className="card-body">
                    <p className='post-text'>{post.postText}</p>
                </div>
            </div>
            {post.commentCount > 0 && <CommentList comments={post.comments} />}
            {Auth.loggedIn() && <CommentForm postId={post._id} />}
        </div>
    );
};

export default SinglePost;