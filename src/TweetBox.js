import React,{useState} from 'react';
import "./TweetBox.css";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import pfp from "./Pfp.jpg";
import db from "./firebase";

export default function TweetBox(){
    const[tweetMessage,setTweetMessage]=useState("");
    const[tweetImage,setTweetImage]=useState("");
    const sendTweet=e=>{
        e.preventDefault();

        db.collection('posts').add({
            displayName:"Tushar Shah",
            username:"tushar21",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
        
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return(
        <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
            <Avatar src={pfp}></Avatar>
            <input 
                onChange={(e)=>setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type="text"
            />
            </div>
            <input 
                onChange={(e)=>setTweetImage(e.target.value)}
                value={tweetImage} 
                className="tweetBox_inputImg"
                placeholder="Enter image URL" 
                type="text"
                />

            
            <Button onClick={sendTweet} className="tweetBox_tweetbutton">Tweet</Button>
        </form>
        </div>
    );
}