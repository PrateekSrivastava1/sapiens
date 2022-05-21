import React from 'react'
import "./JoinedToday.css"

export default function JoinedToday({ user }) {
    const URL = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="joinedTodayBox">
            <img src={URL + user.profilePicture} alt="" className="joinedTodayImage" />
            <span className="joinedTodayText">
                <b>{user.username}</b> joined today
            </span>
        </div>
    )
}
