import React, { useEffect, useState } from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import userData from "../../jsonData/userData";
import axios from 'axios';
import { format } from "timeago.js"
import { Link } from "react-router-dom"

export default function Post({ post }) {
    const [plusOne, setPlusOne] = useState(post.likes.length);
    const [plusOneCheck, setPlusOneCheck] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchAllUsers = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            // console.log(res);
            setUser(res.data);
        };
        fetchAllUsers();
    }, [post.userId]);

    const plusOneHandler = () => {
        setPlusOneCheck(!plusOneCheck);
        if (!plusOneCheck) {
            setPlusOne(plusOne + 1);
        }
        else {
            setPlusOne(plusOne - 1);
        }
    }

    const URL = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className='postBox'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilePicture} alt="" className="postProfileImage" />
                        </Link>
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postTime">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon className='threeDots' />
                    </div>
                    <div className="postTopBottom"></div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={URL + post.img} alt="" className='postImage' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <span className='plusOneIcon' >{plusOne}</span>
                        {/* <span className={plusOneCheck ? "support supported" : "support"} onClick={plusOneHandler}>PlusOne</span> */}
                        <PlusOneIcon className={plusOneCheck ? "support supported" : "support"} onClick={plusOneHandler} />

                    </div>
                    <div className="postBottomRight">
                        <span className='postComment'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
