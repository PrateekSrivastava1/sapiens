import React from 'react'
import "./Topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from "react-router-dom"


export default function Topbar() {
    return (
        <div className="topbarBox">
            <div className="topbarLeft">
                <Link to="/">
                    <span className='logo'>BBD Social Network</span>
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
                    <Badge badgeContent={4} color="error" className='topbarIcon'>
                        <MessageIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error" className='topbarIcon'>
                        <NotificationsNoneIcon />
                    </Badge>
                </div>
                <img className='topbarProfilePicture' src="/assets/profile/Swampfire.png" alt="profile" />
            </div>
        </div>
    )
}