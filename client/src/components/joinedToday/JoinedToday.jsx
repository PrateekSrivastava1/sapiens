import React from 'react'
import "./JoinedToday.css"

export default function JoinedToday({ user }) {
    return (
        <div className="joinedTodayBox">
            <img src={user.profilePicture} alt="" className="joinedTodayImage" />
            <span className="joinedTodayText">
                <b>{user.username}</b> joined today
            </span>
        </div>
    )
}
