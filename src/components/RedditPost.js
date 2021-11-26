import React from 'react';
import './RedditPost.css'

const RedditPost = ({ post }) => {
    const userpage = `https://www.reddit.com/user/${post.data.author}/`

    return(
        <div className="post-container">
            <p className="username">Posted by <a className="username" href={userpage}>u/{post.data.author}</a></p>
            <h2 className="caption">{post.data.title}</h2>
            <div className="post">
                <img className="picture" src={post.data.url} width="400px"/>
            </div>
        </div>
    )
}

export default RedditPost;