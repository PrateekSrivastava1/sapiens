import React, { useContext } from 'react'
import "./Topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";

export default function Topbar() {

    const { user } = useContext(Context);

    const URL = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
        <div className="topbarBox">
            <div className="topbarLeft">
                <Link to="/">
                    <span className='logo'>Sapiens</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <SearchIcon className='searchIcon' />
                    <input type="text" className='searchInput' placeholder='Search for any person' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarPages">
                    <span className="topbarPage">Home</span>
                    <span className="topbarPage">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <Badge badgeContent={4} color="error" className='topbarIcon'>
                        <PersonIcon />
                    </Badge>
                    <Link to="/messenger">
                        <Badge badgeContent={4} color="error" className='topbarIcon'>
                            <MessageIcon color="primary" />
                        </Badge>
                    </Link>
                    <Badge badgeContent={4} color="error" className='topbarIcon'>
                        <NotificationsNoneIcon />
                    </Badge>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img className='topbarProfilePicture' src={user.profilePicture ? URL + user.profilePicture : URL + "profile/noUserProfilePicture.jpg"} alt="profile" />
                </Link>
            </div>
        </div>
    )
}