import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHT } from "../utils/queries";
import ReactionList from "../components/ReactionList";
import ReactionForm from "../components/ReactionForm";
import Auth from "../utils/auth";

const SinglePost = (props) => {
  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <p>
          <span style={{ fontWeight: 700 }}>
            {thought.username}
          </span>{" "}
          thought on {thought.createdAt}
        </p>
        <div>
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      {thought.reactionCount > 0 && (
        <ReactionList reactions={thought.reactions} />
      )}

      {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />}
    </div>
  );
};

export default SinglePost;