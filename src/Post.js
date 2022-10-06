import React from 'react';
import "./Post.css";
import pfp from "./Pfp.jpg";
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

import Gif from "./gif.gif";

export default function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar}){
    return(
        <div className="post">
        <div className="post_avatar">
            <Avatar src={pfp}></Avatar>
        </div>
        <div className="post_body">
            <div className="post_header">
                <div className="post_headerText">
                    <h3>
                    Tushar Shah <span className="post_headerspecial">
                      <VerifiedIcon className="post_badge"/> @tushar2107
                    </span>
                    </h3>
                </div>
                <div className="post_headerdesc">
                    <p>When you have to much in your mind to write but don't know how to write it.</p>
                </div>
            </div>
            <img src={Gif} alt="giphy"/>
            <div className="post_footer">
                <ChatBubbleOutlineIcon fontsize="small"/>
                <RepeatIcon fontsize="small"/>
                <FavoriteBorderIcon fontsize="small"/>
                <PublishIcon fontsize="small"/>
            </div>
            </div>
        </div>
    );

}