import React from "react";
import PostForm from '../components/PostForm';
import SinglePost from "./Singlepost";

function Profile() {
    return (
        <div>
            <h3>
                My Profile
            </h3>
            <div>
                <li>UserName</li>
                <li>20 followers</li>
                <li>19 following</li>
                <li>Life is beautiful if you look at it properly</li>
            </div>
            <PostForm />
            <SinglePost />
        </div>
    )
}

export default Profile;