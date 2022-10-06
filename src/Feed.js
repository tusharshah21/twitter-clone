import React from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
export default function Feed(){
    return(
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox/>
            {/* Post */}
            <Post/>
            {/* Post */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>

            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}

        </div>
    );
}