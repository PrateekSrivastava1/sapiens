import React, { useContext, useEffect, useState } from 'react'
import Share from '../share/Share'
import "./Feed.css"
import Post from '../post/Post'
import postData from "../../jsonData/postData";
import axios from "axios";
import { Context } from '../../context/Context';

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(Context);

    useEffect(() => {
        const fetchAllPosts = async () => {
            const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("/posts/timeline/" + user._id);
            setPosts(
                res.data.sort((post1, post2) => {
                    return new Date(post2.createdAt) - new Date(post1.createdAt);
                })
            );
        };
        fetchAllPosts();
        ;
    }, [username, user._id]);

    return (
        <>
            <div className='feedBox'>
                <div className="feedWrapper">
                    {(!username || username === user.username) && <Share />}
                    {
                        posts.map((p, index) => {
                            return <Post key={index} post={p} />
                        })
                    }
                </div>
            </div>
        </>

    )
}
