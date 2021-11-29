import React, { useEffect, useState } from 'react';
import RedditPostsContainer from './RedditPostsContainer';
import RedditInput from '../components/RedditInput';
import './RedditContentContainer.css'

const RedditContentContainer = ({ categories }) => {
    
    const [posts, setPosts] = useState([])
    const [subRedditTitle, setSubRedditTitle] = useState([])
    const [subRedditAvatar, setSubRedditAvatar] = useState([])

    useEffect(() => {
        getPosts();
    }, [])

    useEffect(() => {
        getSubRedditTitle();
    }, [])

    useEffect(() => {
        getSubRedditAvatar();
    }, [])

    useEffect(() => {
        modifyAvatarLink();
    }, [])



    const getPosts = (()=>{
        fetch('https://www.reddit.com/r/meme/new/.json')
        .then(response => response.json())
        .then(response => response.data.children)
        .then(newPosts => setPosts(newPosts))
        console.log("Loaded Posts")
    })

    const getSubRedditTitle = (()=>{
        fetch('https://www.reddit.com/r/gaming/about/.json')
        .then(response => response.json())
        .then(response => response.data.title)
        .then(subRedditTitle => setSubRedditTitle(subRedditTitle))

        // console.log(subRedditTitle)
        console.log("Loaded Posts")
    })

    const getSubRedditAvatar = (()=>{
        fetch('https://www.reddit.com/r/gaming/about/.json')
        .then(response => response.json())
        .then(response => response.data.community_icon)
        .then(subRedditAvatar => setSubRedditAvatar(subRedditAvatar))

        // console.log(subRedditAvatar)
    })

    const modifyAvatarLink = () => {
        console.log(subRedditAvatar)
        // return subRedditAvatar.replace('amp;', '')
    }

    const addPost = (submittedPost) => {
        submittedPost.id = Date.now();
        const updatedPosts = [submittedPost,...posts];
        setPosts(updatedPosts);
    }
    
    return(
        <div className="body">
            <RedditInput onPostSubmit={(comment) => addPost(comment)}/>
            <RedditPostsContainer  categories={categories} posts={posts}/>
        </div>
    )
};

export default RedditContentContainer;