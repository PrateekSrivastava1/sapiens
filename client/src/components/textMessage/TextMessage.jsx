import React from 'react'
import "./TextMessage.css"
import { format } from "timeago.js";

export default function TextMessage({message, myMessage}) {
    return (
        <div className={myMessage ? "messageBox myMessage" : "messageBox"}>
            <div className="messageTop">
                <img src="https://i.pinimg.com/564x/05/18/a2/0518a2a092bfdc95593b76aead97f220--ratatouille-pimp.jpg" alt="" className="messageImage" />
                <p className="messageText">
                    {message.text}
                </p> 
            </div> 
            <div className="messageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}
