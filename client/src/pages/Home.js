import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';
import PostList from '../components/PostList';
import Auth from '../utils/auth';
import FollowersList from '../components/FollowersList';
import FollowingList from '../components/FollowingList';
import PostForm from '../components/PostForm';


const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    
    const posts = data?.posts || [];
    
    const loggedIn = Auth.loggedIn();
    return (
        <main className='container-xxl'>
            <div>
                {loggedIn && (
                    <div className="col-12 mb-3">
                        <PostForm />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <PostList posts={posts} title="Some Feed for Post(s)..." />
                    )}
                </div>
                {loggedIn && userData ? (
                    <div className="col-12 col-lg-3 mb-3">
                        <FollowersList
                            username={userData.me.username}
                            followersCount={userData.me.followersCount}
                            followers={userData.me.followers}
                        />
                        <FollowingList
                            username={userData.me.username}
                            followingCount={userData.me.followingCount}
                            following={userData.me.following}
                        />
                    </div>
                ) : null}
            </div>
        </main >
    );
};

export default Home;