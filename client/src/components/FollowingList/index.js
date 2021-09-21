import React from "react";

const divStyle = {
    marginBottom:'50px'
}


function FollowingList() {
    return (
        <div className="followingform">
            <h2>
                Following
            </h2>
            <div style={divStyle} >
                <h5 className="username">John Doe</h5>
                <button className='followingbutton1' > Following</button>
            </div>
            <div className='followerbox1' >
                <h5 className='username'>John Doe</h5>
                <button className='followingbutton1' >Following</button>
            </div >
            <div className='followerbox2' >
                <h5 className="username">John Doe</h5>
                <button className='followingbutton1' >Following</button>
            </div>
            <div className='followerbox3' >
                <h5 className="username">John Doe</h5>
                <button className='followingbutton1' >Following</button>
            </div >
        </div>
    )
}

export default FollowingList;