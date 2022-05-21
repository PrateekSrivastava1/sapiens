import React from 'react'
import "./profileRightBar.css"

export default function ProfileRightBar() {
    const URL = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <div className="profileRightbarBox">
                <div className="profileRightbarWrapper">
                    <h4>User Information</h4>
                    <div className="profileRightbarInfo">
                        <div className="profileRightbarInfoItem">
                            <span className="profileRightbarInfoKey">City:</span>
                            <span className="profileRightbarInfoValue">Lucknow</span>
                        </div>
                        <div className="profileRightbarInfoItem">
                            <span className="profileRightbarInfoKey">Email:</span>
                            <span className="profileRightbarInfoValue">prateeksdr4@gmail.com</span>
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
