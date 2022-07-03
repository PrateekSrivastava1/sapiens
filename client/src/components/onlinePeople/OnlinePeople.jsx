import React, { useState } from 'react'
import { useEffect } from 'react';
import "./OnlinePeople.css"
import axios from "axios";

export default function OnlinePeople({ onlineUsers, currentId, setCurrentChat }) {

    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const URL = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("/users/friends/" + currentId);
            // console.log(res.data);
            setFriends(res.data);
        };
        getFriends();
    }, [currentId]);


    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    }, [friends, onlineUsers]) 

    console.log("online friends: ", onlineFriends);

    return (
        <>
            {onlineFriends.map((online) => (
                <div className='onlinePeopleBox'>
                    <div className="onlinePeopleEach">
                        <div className="onlinePeopleImageBox">
                            <img src={online?.profilePicture ? URL + online.profilePicture : URL + "profile/noUserProfilePicture.jpg"} className='onlinePeopleImage' alt="" />
                            <span className="onlinePeopleBadge"></span>
                        </div>
                        <span className='onlinePeopleUsername'>{online?.username}</span>
                    </div>
                </div>
            ))}
            {/* <div className='onlinePeopleBox'>
                <div className="onlinePeopleEach">
                    <div className="onlinePeopleImageBox">
                        <img src="" className='onlinePeopleImage' alt="" />
                        <span className="onlinePeopleBadge"></span>
                    </div>
                    <span className='onlinePeopleUsername'>username</span>
                </div>
            </div> */}
        </>
    )
}
