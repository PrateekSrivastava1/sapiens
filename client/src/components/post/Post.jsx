import React, { useState } from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import userData from "../../jsonData/userData";

export default function Post({ post }) {
    const [plusOne, setPlusOne] = useState(post.like);
    const [plusOneCheck, setPlusOneCheck] = useState(false);

    const plusOneHandler = () => {
        setPlusOneCheck(!plusOneCheck);
        if (!plusOneCheck) {
            setPlusOne(plusOne + 1);
        }
        else {
            setPlusOne(plusOne - 1);
        }
    }

    return (
        <div className='postBox'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={userData.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImage" />
                        <span className="postUsername">
                            {userData.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        <span className="postTime">{post.time}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon className='threeDots' />
                    </div>
                    <div className="postTopBottom"></div>
                </div>
                <div className="postCenter">
                    <div className="postText">
                        {post?.desc}
                    </div>
                    <img src={post.photo} alt="" className='postImage' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        {/* <PlusOneIcon className='plusOneIcon' /> */}
                        <span className='plusOneIcon' >{plusOne}</span>
                        <span className={plusOneCheck ? "support supported" : "support"} onClick={plusOneHandler}>PlusOne</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postComment'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
