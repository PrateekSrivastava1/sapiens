import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Messenger.css";
import Topbar from "../../components/topbar/Topbar"
import Conversation from '../../components/conversation/Conversation';
import TextMessage from '../../components/textMessage/TextMessage';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import OnlinePerson from "../../components/onlinePeople/OnlinePeople"
import { Context } from "../../context/Context"
import axios from "axios";
import { io } from "socket.io-client";

export default function Messenger() {

    const { user } = useContext(Context);
    const [conversations, setConversations] = useState([]);
    const [textMessages, setTextMessages] = useState([]);
    const [arrivalMessages, setArrivalMessages] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [newTextMessages, setNewTextMessages] = useState([]);
    const scrollRef = useRef();
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:6001");
        socket.current.on("getMessage", (data) => {
            setArrivalMessages({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        })
    }, [])

    useEffect(() => {
        arrivalMessages && currentChat?.members.includes(arrivalMessages.sender) && 
        setTextMessages((prev) => [...prev, arrivalMessages]);
    }, [arrivalMessages, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", users => {
            console.log(users);
        })
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id);
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
                // console.log('res.data', typeof (res.data), res);
                setTextMessages(res.data);

            } catch (err) {
                console.log(err);
            }
        };
        getTextMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newTextMessages,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        )

        socket.current.emit("sendMesaage", {
            senderId: user._id,
            receiverId,
            text: newTextMessages
        })

        try {
            const res = await axios.post("/textMessages", message);
            setTextMessages([...textMessages, res.data]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        // console.log(typeof (textMessages));
    }, [textMessages]);

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
                                        <div ref={scrollRef}>
                                            <TextMessage message={m} myMessage={m.sender === user._id} />
                                        </div>
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
                                    <Button
                                        className='chatBoxBottomSubmitButton'
                                        variant="contained"
                                        onClick={handleSubmit}
                                    >
                                        Send <SendIcon />
                                    </Button>
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