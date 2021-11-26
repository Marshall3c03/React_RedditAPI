import React, { useState } from 'react';

const RedditInput = ({ posts, onPostSubmit }) => {

    const [author,setAuthor] = useState("");
    const [title,setTitle] = useState("");
    const [url,setUrl] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
    }
    
    const handleUrlChange = (event) => {
    setUrl(event.target.value);
    }
    
    const handlePostSubmit = (event) => {
    event.preventDefault();
    const authorToSubmit = author.trim();
    const titleToSubmit = title.trim();
    const urlToSubmit = url.trim();
    if (!titleToSubmit || !urlToSubmit){
        return
    }

    onPostSubmit({
        data: {
        title: titleToSubmit,
        url: urlToSubmit,
        author: authorToSubmit,
        }
    });

    setAuthor("");
    setTitle("");
    setUrl("");
    }

    return(
        <div>
            <p>I am the post input form</p>
            <form onSubmit={handlePostSubmit}>
                <input 
                    type="text"
                    placeholder="Enter Username"
                    value={author}
                    onChange={handleAuthorChange}
                />
                <input 
                    type="text"
                    placeholder="Enter Caption"
                    value={title}
                    onChange={handleTitleChange}
                />
                <input 
                    type="text"
                    placeholder="Enter Image Url..."
                    value={url}
                    onChange={handleUrlChange}
                />
                <input 
                    type="submit"
                    value="Post"
                />
            </form>
        </div>
    )
}

export default RedditInput;