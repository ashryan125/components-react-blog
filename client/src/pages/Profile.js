import React from "react";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_FOLLOW } from "../utils/mutations";
import Auth from "../utils/auth";
import PostForm from "../components/PostForm";
// import FollowersList from '../components/FollowersList';
import PostList from "../components/PostList";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Profile() {
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
                <div className="bg-dark text-white p-2">    <h3 className="profile-title">
                {userParam ? `${user.username}'s` : "My"} Profile
              </h3></div>
          

              <p>Life is beautiful, if you look at it properly</p>

              {!userParam && <PostForm />}

              <PostList
                posts={user.posts}
                title={`${user.username}'s posts...'`}
              />
            </Col>

            <Col md={3}>
              <aside>
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
                <div className="card-body">
                  {/* Need to make the 20 followers and 19 following clickable to reach the follwers and following list */}
                  <h4 className="title-fonts">
             <strong> Followers </strong>
            </h4>
                  <p>20 followers</p>
                  <p>19 following</p>

                  {userParam && (
                    <button className="btn ml-auto" onClick={handleClick}>
                      Followers/Following
                    </button>
                  )}
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Profile;
