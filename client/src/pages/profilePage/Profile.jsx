import React from 'react'
import "./Profile.css"
import Feed from '../../components/feeds/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import ProfileRightBar from '../../components/profileRightBar/ProfileRightBar'

export default function Profile() {
    const URL = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <div className="profileBox">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={`${URL}profile/coverImage.jpg`} alt="" className="profileCoverImage" />
                            <img src={`${URL}profile/coderDP.png`} alt="" className="profileDisplayPicture" />
                        </div>
                        <div className="profileInfo">
                            <span className='profileInfoName'> <b>Prateek Srivastava</b> </span>
                            <span className="profileInfoDirection">hey! I am software engineer</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <ProfileRightBar />
                    </div>
                </div>
            </div>
        </>
    )
}
