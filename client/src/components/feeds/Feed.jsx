import React, { useEffect, useState } from 'react'
import Share from '../share/Share'
import "./Feed.css"
import Post from '../post/Post'
import postData from "../../jsonData/postData";
import axios from "axios";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchAllPosts = async () => {
            const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("/posts/timeline/6285fdce304937c2ff82af03");
            // console.log(res);
            setPosts(res.data);
        };
        fetchAllPosts();
        // console.log("this is posts", posts)
        ;
    }, []);

    return (
        <div className='feedBox'>
            <div className="feedWrapper">
                <Share />
                {
                    posts.map((p) => {
                        return <Post key={p._id} post={p} />
                    })
                }
            </div>
        </div>
    )
}
