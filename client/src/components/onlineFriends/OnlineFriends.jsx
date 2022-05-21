import React from 'react'
import "./OnlineFriends.css"

export default function OnlineFriends({user}) {
    const URL = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="onlineFriendBox">
            <img src={URL + user.profilePicture} alt="" className="onlineFriendImage" />
            <span className="onlineFriendName">
                <b>{user.username}</b> is Online
            </span>
        </div>
    )
}
