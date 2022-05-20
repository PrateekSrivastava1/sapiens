import React from 'react'
import Share from '../share/Share'
import "./Feed.css"
import Post from '../post/Post'


export default function Feed() {
    return (
        <div className='feedBox'>
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
