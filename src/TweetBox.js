import React from 'react';
import "./TweetBox.css";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import pfp from "./Pfp.jpg";

export default function TweetBox(){
    return(
        <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
            <Avatar src={pfp}></Avatar>
            <input placeholder="What's happening?" type="text"/>
            <input 
                className="tweetBox_inputImg"
                placeholder="Enter image URL" 
                type="text"
                />

            </div>
            <Button className="tweetBox_tweetbutton">Tweet</Button>
        </form>
        </div>
    );
}