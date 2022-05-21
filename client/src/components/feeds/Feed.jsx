import React, { useEffect, useState } from 'react'
import Share from '../share/Share'
import "./Feed.css"
import Post from '../post/Post'
import postData from "../../jsonData/postData";
import axios from "axios";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     const fetchAllPosts = async () => {
    //         const res = await axios.get("posts/timeline/62894050c554493c3c7b10b1");
    //         console.log(res);
    //     };
    //     fetchAllPosts();
    // }, []);


    return (
        <div className='feedBox'>
            <div className="feedWrapper">
                <Share />
                {/* {postData.map((post) => (
                    <Post key={post.id} post={post} />
                ))
                } */}
            </div>
        </div>
    )
}
