import React, { useEffect, useState, useContext } from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import userData from "../../jsonData/userData";
import axios from 'axios';
import { format } from "timeago.js"
import { Link } from "react-router-dom"
import { Context } from '../../context/Context';

export default function Post({ post }) {
    const [plusOne, setPlusOne] = useState(post.likes.length);
    const [plusOneCheck, setPlusOneCheck] = useState(false);
    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(Context);

    useEffect(() => {
        setPlusOneCheck(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]) 

    useEffect(() => {
        const fetchAllUsers = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchAllUsers();
    }, [post.userId]);

    const plusOneHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
        } catch (err) {
            console.log(err);
        }
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
                        <Link to={`/profile/${user.username}`}>
                            <img src={user.profilePicture ? URL + user.profilePicture : URL + "profile/noUserProfilePicture.jpg"} alt="" className="postProfileImage" />
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
