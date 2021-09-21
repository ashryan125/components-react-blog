import React from "react";
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { FOLLOW } from '../utils/mutations';
import Auth from '../utils/auth';
import PostForm from '../components/PostForm';
// import FollowersList from '../components/FollowersList';
// import FollowingList from '../components/FollowingList';
import PostList from "../components/PostList";

function Profile() {
    const { username: userParam } = useParams();
    const [follow] = useMutation(FOLLOW);
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleClick = async () => {
        try {
            await follow({
                variables: { id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main>
            <div className="flex-row justify-content-center mb-3">
                <div className='col-12 col-md-9'>
                    <h3>
                        {userParam ? `${user.username}'s` : 'My'} profile
                    </h3>
                    <div className='card-body'>
                        {/* Need to make the 20 followers and 19 following clickable to reach the follwers and following list */}
                        <span>20 followers 19 following</span>
                        <p>Life is beautiful, if you look at it properly</p>
                        {userParam && (
                            <button className="btn ml-auto" onClick={handleClick}>
                                Followers/Following
                            </button>
                        )}
                    </div>
                    <div className="flex-row justify-content-center mb-3">
                        <div className="col-12 mb-3 col-lg-8">
                            {!userParam && <PostForm />}
                        </div>
                        <div className="col-12 col-lg-3 mb-3">
                            <PostList posts={user.posts} title={`${user.username}'s posts...'`} />
                        </div>

                        {/* Need to create a list of followers and following ppl by user */}
                        {/* <div className="col-12 col-lg-3 mb-3">
                                <FollowersList
                                    username={user.username}
                                    followersCount={user.followCount}
                                    followers={user.follow}
                                />
                            </div> */}
                        {/* <div className="col-12 col-lg-3 mb-3">
                                <FollowingList
                                    username={user.username}
                                    followingCount={user.followCount}
                                    following={user.follow}
                                />
                            </div> */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;