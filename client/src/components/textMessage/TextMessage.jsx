import React from 'react'
import "./TextMessage.css"

export default function TextMessage({myMessage}) {
    return (
        <div className={myMessage ? "messageBox myMessage" : "messageBox"}>
            <div className="messageTop">
                <img src="https://i.pinimg.com/564x/05/18/a2/0518a2a092bfdc95593b76aead97f220--ratatouille-pimp.jpg" alt="" className="messageImage" />
                <p className="messageText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsa.
                </p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    )
}
