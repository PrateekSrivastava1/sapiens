import React, { useContext, useRef, useState } from 'react'
import "./Share.css"
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { Context } from '../../context/Context';
import axios from "axios"
import { Link } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function Share() {

    const { user } = useContext(Context);
    const PHOTO_URL = process.env.REACT_APP_PUBLIC_FOLDER;
    // console.log(user.username);
    const desc = useRef();
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;

            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            await axios.post("/posts", newPost);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='shareBox'>
            <div className="shareWrapper">
                <div className="shareTop">
                    {/* <img src={PHOTO_URL + "profile/noUserProfilePicture.jpg"} alt="" className="shareProfileImage" /> */}
                    <Link to={`/profile/${user.username}`}>
                        <img src={user.profilePicture ? PHOTO_URL + user.profilePicture : PHOTO_URL + "profile/noUserProfilePicture.jpg"} alt="" className="shareProfileImage" />
                    </Link>
                    <input type="text" ref={desc} className="shareInput" placeholder={"Hey " + user.username + "!, do you want to share something ?"} />
                </div>
                <hr />
                {file && (
                    <div className="shareImgContainer">
                        <img className='shareImage' src={URL.createObjectURL(file)} alt="" />
                        <RemoveCircleOutlineIcon className="shareImageCancelIcon" onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PhotoIcon className='shareIcon' />
                            <span className="shareOptionText">Photo</span>
                            <input style={{ display: "none" }} type="file" id="file" accept=".jpeg,.jpg,.png" onChange={(e) => setFile(e.target.files[0])} />
                        </label>
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
                    <button className='sharePostButton' type='submit'>Post</button>
                </form>
            </div>
        </div>
    )
}
