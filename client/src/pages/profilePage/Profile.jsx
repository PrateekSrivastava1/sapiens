import React, { useEffect, useState } from 'react'
import "./Profile.css"
import Feed from '../../components/feeds/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import ProfileRightBar from '../../components/profileRightBar/ProfileRightBar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Profile() {
    const [user, setUser] = useState({});
    const URL = process.env.REACT_APP_PUBLIC_FOLDER;
    const params = useParams();
    const username = params.username;

    useEffect(() => {
        const fetchAllUsers = async () => {
            const res = await axios.get(`/users?username=${username}`);
            // console.log(res);
            setUser(res.data);
        };
        fetchAllUsers();
    }, [username]);
    return (
        <>
            <Topbar />
            <div className="profileBox">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.backgroundPicture ? URL + user.backgroundPicture : URL + "/profile/noBackgroundPicture.jpg"} alt="" className="profileCoverImage" />
                            <img src={user.profilePicture ? URL + user.profilePicture : URL + "/profile/noUserProfilePicture.jpg"} alt="" className="profileDisplayPicture" />
                        </div>
                        <div className="profileInfo">
                            <span className='profileInfoName'> <b>{user.username}</b> </span>
                            <span className="profileInfoDirection">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <ProfileRightBar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
