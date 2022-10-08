import React,{forwardRef} from 'react';
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


const Post = forwardRef(({displayName,username,verified,text,image,avatar},ref)=>{
    return(
        <div className="post" ref={ref}>
        <div className="post_avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post_body">
            <div className="post_header">
                <div className="post_headerText">
                    <h3>
                    {displayName}{" "}
                    <span className="post_headerspecial">
                      {verified &&<VerifiedIcon className="post_badge"/>} @{username}
                    </span>
                    </h3>
                </div>
                <div className="post_headerdesc">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image}/>
            <div className="post_footer">
                <ChatBubbleOutlineIcon fontsize="small"/>
                <RepeatIcon fontsize="small"/>
                <FavoriteBorderIcon fontsize="small"/>
                <PublishIcon fontsize="small"/>
            </div>
            </div>
        </div>
    );
});

export default Post;