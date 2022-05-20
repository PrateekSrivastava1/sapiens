import React from 'react'
import Share from '../share/Share'
import "./Feed.css"
import Post from '../post/Post'
import postData from "../../jsonData/postData";

export default function Feed() {
    return (
        <div className='feedBox'>
            <div className="feedWrapper">
                <Share />
                {postData.map((post) => (
                    <Post key={post.id} post={post} />
                ))
                }
            </div>
        </div>
    )
}
