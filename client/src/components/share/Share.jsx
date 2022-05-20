import React from 'react'
import "./Share.css"
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import MicNoneIcon from '@mui/icons-material/MicNone';

export default function Share() {
    return (
        <div className='shareBox'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/profile/Swampfire.png" alt="" className="shareProfileImage" />
                    <input type="text" className="shareInput" placeholder='what do you want to talk about' />
                </div>
                <hr />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PhotoIcon className='shareIcon' />
                            <span className="shareOptionText">Photo</span>
                        </div>
                        <div className="shareOption">
                            <YouTubeIcon className='shareIcon' />
                            <span className="shareOptionText">Video</span>
                        </div>
                        <div className="shareOption">
                            <ArticleIcon className='shareIcon' />
                            <span className="shareOptionText">Article</span>
                        </div>
                        <div className="shareOption">
                            <MicNoneIcon className='shareIcon' />
                            <span className="shareOptionText">Voice Message</span>
                        </div>
                    </div>
                    <button className='sharePostButton'>Post</button>
                </div>
            </div>
        </div>
    )
}
