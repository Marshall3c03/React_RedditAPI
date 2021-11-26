import React from 'react';
import './RedditHeader.css'

const RedditHeader = () => {
    return(
        <div className="header">
            <div className="avatar-title">
            <img className="circle-avatar" src="https://styles.redditmedia.com/t5_2qi1r/styles/communityIcon_2stg5hn8m5k51.png?width=256&s=e4abb6ac11d144c7fb965232592b4d42fe0e370b" alt="" />
            <h1 className="title">Meme: New and Improved (coming soon)</h1>
            </div>
            <p className="directory">r/meme</p>
        </div>
    )
};

export default RedditHeader;