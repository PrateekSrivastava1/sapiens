import React from 'react'
import "./profileRightBar.css"

export default function ProfileRightBar({ user }) {
    const URL = process.env.REACT_APP_PUBLIC_FOLDER;
    // const totalFollowers = user.followers.length;
    // const totalFollowings = user.followings.length;

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
                            {/* user.followers.length */}
                            <span className="profileRightbarInfoValue">{ }</span>
                        </div>
                        <div className="profileRightbarInfoItem">
                            <span className="profileRightbarInfoKey">Followings:</span>
                            {/* user.followings.length */}
                            <span className="profileRightbarInfoValue">{ }</span>
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
                        <div className="profileRightbarFollowing">
                            <img src={`${URL}profile/bapuji.jpg`} alt="" className='profileRightbarFollowingImage' />
                            <span className="profileRightbarFollowingName">Champaklal Gada</span>
                        </div>
                        <div className="profileRightbarFollowing">
                            <img src={`${URL}profile/bapuji.jpg`} alt="" className='profileRightbarFollowingImage' />
                            <span className="profileRightbarFollowingName">Champaklal Gada</span>
                        </div>
                        <div className="profileRightbarFollowing">
                            <img src={`${URL}profile/bapuji.jpg`} alt="" className='profileRightbarFollowingImage' />
                            <span className="profileRightbarFollowingName">Champaklal Gada</span>
                        </div>
                        <div className="profileRightbarFollowing">
                            <img src={`${URL}profile/bapuji.jpg`} alt="" className='profileRightbarFollowingImage' />
                            <span className="profileRightbarFollowingName">Champaklal Gada</span>
                        </div>
                        <div className="profileRightbarFollowing">
                            <img src={`${URL}profile/bapuji.jpg`} alt="" className='profileRightbarFollowingImage' />
                            <span className="profileRightbarFollowingName">Champaklal Gada</span>
                        </div>
                        <div className="profileRightbarFollowing">
                            <img src={`${URL}profile/bapuji.jpg`} alt="" className='profileRightbarFollowingImage' />
                            <span className="profileRightbarFollowingName">Champaklal Gada</span>
                        </div>
                        <div className="profileRightbarFollowing">
                            <img src={`${URL}profile/bapuji.jpg`} alt="" className='profileRightbarFollowingImage' />
                            <span className="profileRightbarFollowingName">Champaklal Gada</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
