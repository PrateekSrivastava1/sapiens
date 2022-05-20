import React from 'react'
import "./OnlineFriends.css"

export default function OnlineFriends({user}) {
    return (
        <div className="onlineFriendBox">
            <img src={user.profilePicture} alt="" className="onlineFriendImage" />
            <span className="onlineFriendName">
                <b>{user.username}</b> is Online
            </span>
        </div>
    )
}
