import React, { useEffect, useState } from 'react';
import RedditImageContainer from '../components/RedditImageContainer';

const RedditContentContainer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = (()=>{
        fetch('https://www.reddit.com/r/meme/new/.json')
        .then(response => response.json())
        .then(response => response.data.children)
        .then(newPosts => setPosts(newPosts))
        console.log("Loaded Posts")
    })

    return(
        <div>
            <p>I am the reddit post container</p>
            <RedditImageContainer />
        </div>
    )
};

export default RedditContentContainer;