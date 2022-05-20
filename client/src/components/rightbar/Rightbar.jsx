import React from 'react'
import JoinedToday from '../joinedToday/JoinedToday'
import OnlineFriends from '../onlineFriends/OnlineFriends'
import "./Rightbar.css"

export default function Rightbar() {
    return (
        <div className='rightbarBox'>
            <div className="rightbarWrapper">
                <div className="joinedTodayBoxWrapper">
                    <JoinedToday />
                    <JoinedToday />
                    <JoinedToday />
                    <JoinedToday />
                    <JoinedToday />
                    <JoinedToday />
                    <JoinedToday />
                </div>
                <h3>Online Friends</h3>
                <div className="onlineFriendsBoxWrapper">
                    <OnlineFriends/>
                    <OnlineFriends/>
                    <OnlineFriends/>
                    <OnlineFriends/>
                    <OnlineFriends/>
                    <OnlineFriends/>
                    <OnlineFriends/>
                    <OnlineFriends/>

                </div>
            </div>
        </div>
    )
}
