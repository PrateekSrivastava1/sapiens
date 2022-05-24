import React, { useContext, useEffect, useState } from 'react'
import "./profileRightBar.css"
import axios from "axios"
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export default function ProfileRightBar({ user }) {
    const URL = process.env.REACT_APP_PUBLIC_FOLDER;
    const [connections, setConnections] = useState([]);
    const { user: currentUser, dispatch } = useContext(Context);
    const [follow, setFollow] = useState(false);

    useEffect(() => {
        setFollow(currentUser.followings.includes(user?._id));
    }, [currentUser, user.id]);

    useEffect(() => {
        const getConnectionList = async () => {
            try {
                const connectionList = await axios.get("/users/friends/" + user._id);
                // const res = JSON.stringify(connectionList.data);
                setConnections(connectionList.data);
                // console.log("this is your connection list: " +  JSON.stringify(connectionList.data));
                console.log("this is your connection list: " + JSON.stringify(connections));
            } catch (err) {
                console.log(err);
            }
        };
        getConnectionList();
    }, [user]);

    const handleFollow = async () => {
        try {
            if (follow) {
                await axios.put("/users/" + user._id + "/unfollow", { userId: currentUser._id })
                dispatch({ type: "UNFOLLOW", payload: user._id });
            }
            else {
                await axios.put("/users/" + user._id + "/follow", { userId: currentUser._id })
                dispatch({ type: "FOLLOW", payload: user._id });
            }
        } catch (err) {
            console.log(err);
        }
        setFollow(!follow)
    }

    return (
        <>

            <div className="profileRightbarBox">
                {user.username !== currentUser.username && (
                    <button className='rightbarFollowButton' onClick={handleFollow}>
                        {follow ? "Remove " : "Follow "}
                        {follow ? <PersonRemoveIcon /> : <PersonAddAltIcon />}
                    </button>
                )}
                <div className="profileRightbarWrapper">
                    <h4>User Information</h4>
                    <div className="profileRightbarInfo">
                        <div className="profileRightbarInfoItem">
                            <span className="profileRightbarInfoKey">City:</span>
                            <span className="profileRightbarInfoValue">{user.city}</span>
                        </div>
                        <div className="profileRightbarInfoItem">
                            <span className="profileRightbarInfoKey">Followers:</span>
                            <span className="profileRightbarInfoValue">{8}</span>
                        </div>
                        <div className="profileRightbarInfoItem">
                            <span className="profileRightbarInfoKey">Followings:</span>
                            <span className="profileRightbarInfoValue">{7}</span>
                        </div>
                        <div className="profileRightbarInfoItem">
                            <span className="profileRightbarInfoKey">Email:</span>
                            <span className="profileRightbarInfoValue">{user.email}</span>
                        </div>
                        <div className="profileRightbarInfoItem">
                            <span className="profileRightbarInfoKey">Relationship:</span>
                            <span className="profileRightbarInfoValue">Single</span>
                        </div>
                    </div>
                    <h4 className='friendsHeading'>Followers</h4>
                    <div className="profileRightbarFollowings">
                        {
                            connections.map((connection) => {
                                return (<Link to={"/profile/" + connection.username}>
                                    <div className="profileRightbarFollowing">
                                        <img src={connection.profilePicture ? URL + connection.profilePicture : URL + "profile/noUserProfilePicture.jpg"} alt="" className='profileRightbarFollowingImage' />
                                        <span className="profileRightbarFollowingName">{connection.username}</span>
                                    </div>
                                </Link>)
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}
