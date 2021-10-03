import React from "react";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_FOLLOW } from "../utils/mutations";
import Auth from "../utils/auth";
import PostForm from "../components/PostForm";
import FollowersList from "../components/FollowersList";
import FollowingList from "../components/FollowingList";
import PostList from "../components/PostList";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const { username: userParam } = useParams();
  const [follow] = useMutation(ADD_FOLLOW);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links
        above to sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await follow({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container-xxl">
      <div className="flex-row justify-content-center mb-3 mt-5">
        <Container>
          <Row>
            <Col md={9}>
              <div className="bg-dark text-white p-2">
                <h3 className="profile-title">
                  {userParam ? `${user.username}'s` : "My"} Profile
                </h3>
              </div>

              {!userParam && <PostForm />}

              <PostList
                posts={user.posts}
                title={`${user.username}'s posts...'`}
              />
            </Col>

            <Col md={3}>
              <aside>
                {/* Need to create a list of followers and following ppl by user */}
                <div className="card-body" style={{ padding: 0 }}>
                  {userParam && (
                    <button
                      className="btn ml-auto title-fonts"
                      onClick={handleClick}
                    >
                      FOLLOWERS
                    </button>
                  )}
                  <FollowersList
                    username={user.me.username}
                    followersCount={user.me.followersCount}
                    followers={user.me.followers}
                  />
                  <FollowingList
                    username={user.me.username}
                    followingCount={user.me.followingCount}
                    following={user.me.following}
                  />
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
