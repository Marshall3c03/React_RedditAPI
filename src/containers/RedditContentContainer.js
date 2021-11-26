import React, { useEffect, useState } from 'react';
import RedditPostsContainer from './RedditPostsContainer';
import RedditInput from '../components/RedditInput';
import './RedditContentContainer.css'

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

    const addPost = (submittedPost) => {
        submittedPost.id = Date.now();
        const updatedPosts = [...posts, submittedPost];
        setPosts(updatedPosts);
    }
    
    return(
        <div className="body">
            <p>I am the reddit post container</p>
            <RedditInput onPostSubmit={(comment) => addPost(comment)}/>
            <RedditPostsContainer  categories={categories} posts={posts}/>
        </div>
    )
};

export default RedditContentContainer;