import React from 'react';
import RedditPost from './RedditPost';

const RedditImageContainer = ({ posts }) => {

    const postItems = posts.map((post , index) => {
        return <RedditPost post={post} key={index}/>
    })

    return(
        <div>
            <p>I am the Image Container</p>
            {postItems}
        </div>
    )
}

export default RedditImageContainer;