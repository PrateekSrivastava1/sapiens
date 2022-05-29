import React, { useContext, useEffect, useState } from 'react'
import "./Messenger.css";
import Topbar from "../../components/topbar/Topbar"
import Conversation from '../../components/conversation/Conversation';
import TextMessage from '../../components/textMessage/TextMessage';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import OnlinePerson from "../../components/onlinePeople/OnlinePeople"
import { Context } from "../../context/Context"
import axios from "axios";

export default function Messenger() {

    const { user } = useContext(Context);
    const [conversations, setConversations] = useState([]);
    const [textMessages, setTextMessages] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [newTextMessages, setNewTextMessages] = useState([]);


    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id);
                // console.log(res);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getTextMessages = async () => {
            try {
                const res = await axios.get("/textMessages/" + currentChat?._id);
                setTextMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getTextMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newTextMessages,
            conversationId: currentChat._id,
        };
        try {
            const res = await axios.post("/textMessages", message);
            setTextMessages([...textMessages, res.data]);
            setTextMessages("");
        } catch (err) {
            console.log(err);
        }
    }

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
                        {conversations.map((c) => (
                            <div onClick={() => setCurrentChat(c)}>
                                <Conversation conversation={c} currentUser={user} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ?
                            <>
                                <h3>
                                    {user.username}
                                </h3>
                                <hr />
                                <div className="chatBoxTop">
                                    {textMessages.map((m) => (
                                        <TextMessage message={m} myMessage={m.sender === user._id} />
                                    ))}
                                </div>
                                <div className="chatBoxBottom">
                                    <textarea
                                        onChange={(e) => setNewTextMessages(e.target.value)}
                                        name=""
                                        id=""
                                        rows="1"
                                        className='chatBoxBottomMessageInput'
                                        placeholder='type something...'
                                        value={newTextMessages}
                                    />
                                    <button
                                        className='chatBoxBottomSubmitButton'
                                        variant="contained"
                                        onClick={handleSubmit}
                                    >
                                        Send <SendIcon />
                                    </button>
                                </div>
                            </> :
                            <span className='noChatSpan'>
                                "select a conversation to chat"
                            </span>
                        }
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