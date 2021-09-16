import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";


const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  const [addFriend] = useMutation(ADD_FRIEND);

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.log(e);
    }
  };

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

  return (
    <div>
      </div>
  );
};

export default Profile;