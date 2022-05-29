import React from 'react'
import "./OnlinePeople.css"

export default function OnlinePeople() {
    return (
        <div className='onlinePeopleBox'>
            <div className="onlinePeopleEach">
                <div className="onlinePeopleImageBox">
                    <img src="https://i.pinimg.com/564x/05/18/a2/0518a2a092bfdc95593b76aead97f220--ratatouille-pimp.jpg" className='onlinePeopleImage' alt="" />
                    <span className="onlinePeopleBadge"></span>
                </div>
                <span className='onlinePeopleUsername'>Username</span>
            </div>
        </div>
    )
}
