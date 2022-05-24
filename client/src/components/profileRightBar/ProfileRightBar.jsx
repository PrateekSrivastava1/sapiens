import React, { useEffect, useState } from 'react'
import "./profileRightBar.css"
import axios from "axios"
import { Link } from 'react-router-dom';


export default function ProfileRightBar({ user }) {
    const URL = process.env.REACT_APP_PUBLIC_FOLDER;
    const [connections, setConnections] = useState([]);

    useEffect(() => {
        const getConnectionList = async () => {
            try {
                const connectionList = await axios.get("/users/connections/" + user._id);
                setConnections(connectionList.data)
            } catch (err) {
                console.log(err);
            }
        }
        getConnectionList();
    }, [user._id])

    return (
        <>
            <div className="profileRightbarBox">
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
                    <h4 className='friendsHeading'>Friends</h4>
                    <div className="profileRightbarFollowings">
                        {connections.map((connection) => {
                            <Link to={"/profile/" + connection.username}>
                                <div className="profileRightbarFollowing">
                                    <img src={connection.profilePicture ? URL + connection.profilePicture : URL + "profile/noUserProfilePicture.jpg"} alt="" className='profileRightbarFollowingImage' />
                                    <span className="profileRightbarFollowingName">{connection.username}</span>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
