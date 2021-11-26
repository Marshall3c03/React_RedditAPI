import React from 'react';
import RedditCategories from '../components/RedditCategories';
import RedditPost from '../components/RedditPost';
import './RedditPostsContainer.css'

const RedditPostsContainer = ({ posts, categories }) => {

    const postItems = posts.map((post , index) => {
        return <RedditPost post={post} key={index}/>
    })

    const CategoryItems = categories.map(category => {
        return <button className="button">{category.name}</button>
    })

    return(
        <div className="posts-container">
            <div className="buttons">
                {CategoryItems}
            </div>
            {postItems}
        </div>
    )
}

export default RedditPostsContainer;