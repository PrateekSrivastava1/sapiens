import React, { useEffect, useState } from 'react'
import "./Conversation.css"
import axios from "axios";

export default function Conversation({ conversation, currentUser }) {

    const friendId = conversation.members.find((member) => member !== currentUser._id);
    const [conversationUser, setConversationUser] = useState();

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios("/users?userId=" + friendId);
                // console.log(res);
                setConversationUser(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getUser();
    }, [currentUser, conversation]);

    return (
        <div className='conversationBox'>
            {/* <img className='conversationImage' src="https://i.pinimg.com/564x/05/18/a2/0518a2a092bfdc95593b76aead97f220--ratatouille-pimp.jpg" alt="" /> */}
            <img className='conversationImage' src={conversationUser?.profilePicture ? conversationUser.profilePicture : URL + "profile/noUserProfilePicture.jpg"} alt="" />
            <span className='conversationPersonName'>{conversationUser?.username}</span>
            {/* <span className='conversationPersonName'>someone</span> */}
        </div>
    )
}