import React from "react";
import { Link } from 'react-router-dom';


function FollowersList({ followersCount, username, followers }) {
    if (!followers || !followers.length) {
        return <p className="bg-dark text-light p-3 title-fonts">{username} Followers </p>;
    }

    return (
        <div>
            <h4>
                {username}'s {followersCount} {followersCount === 1 ? 'follow' : 'followers'}
            </h4>
            {followers.map(follow => (
                <button className="btn w-100 display-block mb-2" key={follow._id}>
                <Link to={`/profile/${follow.username}`}>{follow.username}</Link>
              </button>
            ))}     
        </div>
    )
}

export default FollowersList;