import React from "react";
import { Link } from 'react-router-dom';

function FollowingList({ followingCount, username, following }) {
    if (!following || !following.length) {
        return <p className="bg-dark text-light p-3 title-fonts">{username} Following</p>;
    }

    return (
        <div>
            <h4>
                {username}'s {followingCount} {followingCount === 1 ? 'follow' : 'following'}
            </h4>
            {following.map(follow => (
                <button className="btn w-100 display-block mb-2" key={follow._id}>
                <Link to={`/profile/${follow.username}`}>{follow.username}</Link>
              </button>
            ))}     
        </div>
    )
}

export default FollowingList;