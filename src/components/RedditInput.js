import React from 'react';

const RedditInput = ({ posts }) => {

    return(
        <div>
            <p>I am the post input form</p>
            <form>
                <input type="text"></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default RedditInput;