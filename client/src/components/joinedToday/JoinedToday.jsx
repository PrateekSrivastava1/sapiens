import React from 'react'
import "./JoinedToday.css"

export default function JoinedToday() {
    return (
            <div className="joinedTodayBox">
                <img src="/assets/profile/Swampfire.png" alt="" className="joinedTodayImage" />
                <span className="joinedTodayText">
                    <b>Pranjal</b> joined today
                </span>
            </div>
    )
}
