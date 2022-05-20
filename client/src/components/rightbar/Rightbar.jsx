import React from 'react'
import JoinedToday from '../joinedToday/JoinedToday'
import OnlineFriends from '../onlineFriends/OnlineFriends'
import "./Rightbar.css"
import userData from "../../jsonData/userData";

export default function Rightbar() {
    return (
        <div className='rightbarBox'>
            <div className="rightbarWrapper">
                <div className="joinedTodayBoxWrapper">
                    {userData.map((user) => (
                    <JoinedToday key={user.id} user={user} />
                    ))}
                </div>
                <h3>Online Friends</h3>
                <div className="onlineFriendsBoxWrapper">
                    {userData.map((user) => (
                    <OnlineFriends key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    )
}
