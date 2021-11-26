import React, { useEffect, useState } from 'react';
import RedditImageContainer from '../components/RedditImageContainer';

const RedditContentContainer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = (()=>{
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