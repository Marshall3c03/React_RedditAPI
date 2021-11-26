import React from 'react';

const RedditPost = ({ post }) => {
    const userpage = `https://www.reddit.com/user/${post.data.author}/`

    return(
        <div>
            <p>Posted by <a href={userpage}>u/{post.data.author}</a></p>
            <h2>{post.data.title}</h2>
            <img src={post.data.url} width="250px"/>
        </div>
    )
}

export default RedditPost;