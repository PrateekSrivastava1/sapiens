import React from 'react'
import "./Messenger.css";
import Topbar from "../../components/topbar/Topbar"
import Conversation from '../../components/conversation/Conversation';
import TextMessage from '../../components/textMessage/TextMessage';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import OnlinePerson from "../../components/onlinePeople/OnlinePeople"

export default function Messenger() {
    return (
        <>
            <Topbar />
            <div className='messengerBox'>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <h3>
                            Conversations
                        </h3>
                        <input type="text" className="searchMenuInput" placeholder='Search for friends...' />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <h3>
                            Person Name
                        </h3>
                        <hr />
                        <div className="chatBoxTop">
                            <TextMessage />
                            <TextMessage myMessage />
                            <TextMessage />
                            <TextMessage myMessage />
                            <TextMessage />
                            <TextMessage myMessage />
                            <TextMessage />
                            <TextMessage myMessage />
                            <TextMessage />
                            <TextMessage myMessage />
                            <TextMessage />
                            <TextMessage myMessage />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea name="" id="" rows="1" className='chatBoxBottomMessageInput' placeholder='type something...'></textarea>
                            <Button className='chatBoxBottomSubmitButton' variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <h3>
                            Online People
                        </h3>
                        <OnlinePerson />
                        <OnlinePerson />
                        <OnlinePerson />
                        <OnlinePerson />
                        <OnlinePerson />
                    </div>
                </div>
            </div>
        </>
    )
}