import React from 'react';
import RedditCategories from '../components/RedditCategories';
import RedditPost from '../components/RedditPost';

const RedditPostsContainer = ({ posts, categories }) => {

    const postItems = posts.map((post , index) => {
        return <RedditPost post={post} key={index}/>
    })

    const CategoryItems = categories.map(category => {
        return <button>{category.name}</button>
    })

    return(
        <div>
            <p>I am the Image Container</p>
            {CategoryItems}
            {postItems}
        </div>
    )
}

export default RedditPostsContainer;