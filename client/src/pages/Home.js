import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";
import Auth from "../utils/auth";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
          <div>
          </div>
    </main>
  );
};

export default Home;