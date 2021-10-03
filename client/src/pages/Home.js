import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import PostList from '../components/PostList';
import Auth from '../utils/auth';
import PostForm from '../components/PostForm';


const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    
    const loggedIn = Auth.loggedIn();
    return (
        <main className='container-xxl'>
            <div className="col-12 mb-3">
                {loggedIn && (
                    <div>
                        <PostForm />
                    </div>
                )}
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <PostList posts={posts} title="Some Feed for Post(s)..." />
                    )}
            </div>
        </main >
    );
};

export default Home;