import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ME } from '../utils/queries';
import PostList from '../components/PostList';
import Auth from '../utils/auth';
import FollowersList from '../components/FollowersList';
import FollowingList from '../components/FollowingList';
import PostForm from '../components/PostForm';


function Home() {
    const { loading, data } = useQuery(QUERY_POSTS);
    const { data: userData } = useQuery(QUERY_ME);
    const posts = data?.posts || [];
    console.log(posts);
    const loggedIn = Auth.loggedIn();
    return (
        <main>
            <div className='container-xxl'>
                {loggedIn && (
                    <div className="col-12 mb-3">
                        <PostForm />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
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
                            followersCount={userData.me.followCount}
                            followers={userData.me.follow}
                        />
                        <FollowingList
                            username={userData.me.username}
                            followingCount={userData.me.followCount}
                            following={userData.me.follow}
                        />
                    </div>
                ) : null}
            </div>
        </main >
    );
};

export default Home;