import React from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlusOneIcon from '@mui/icons-material/PlusOne';

export default function Post() {
    return (
        <div className='postBox'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/profile/Swampfire.png" alt="" className="postProfileImage" />
                        <span className="postUsername">Prateek Srivastav</span>
                        <span className="postTime">1 day ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon className='threeDots' />
                    </div>
                    <div className="postTopBottom"></div>
                </div>
                <div className="postCenter">
                    <div className="postText">Ben 10 is an American media franchise created by Man of Action
                        Studios and produced by Cartoon Network Studios. The series centers on a boy named Ben
                        Tennyson who acquires the Omnitrix, an alien device resembling a wristwatch, which
                        contains DNA of different alien species. Using the Omnitrix, Ben can transform into
                        powerful aliens with various abilities. The Omnitrix initially contains ten aliens,
                        although later on Ben obtains more species by adding their DNA.
                    </div>
                    <img src="/assets/PostImages/ben10family.jpg" alt="" className='postImage' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <PlusOneIcon className='plusOneIcon' />
                        <span className='support'>PlusOne</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postComment'>6 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
