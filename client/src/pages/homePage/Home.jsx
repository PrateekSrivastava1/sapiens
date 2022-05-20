import React from 'react'
import Feed from '../../components/feeds/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import "./Home.css"

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeBox">
                <Leftbar/>
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}
