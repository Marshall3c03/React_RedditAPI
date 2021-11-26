import React, { useEffect, useState } from 'react';
import RedditPostsContainer from './RedditPostsContainer';
import RedditInput from '../components/RedditInput';

const RedditContentContainer = ({ categories }) => {

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
            <RedditInput />
            <RedditPostsContainer categories={categories} posts={posts}/>
        </div>
    )
};

export default RedditContentContainer;