import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed,
     TwitterShareButton,
         TwitterTweetEmbed, 
        } from 'react-twitter-embed';
         import SearchIcon from '@mui/icons-material/Search';


export default function Widgets(){
    return(
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_search"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets_container">
            <h2>What's happening?</h2>
            <TwitterTweetEmbed tweetId={"1577209126165569536"}/>

            <TwitterTimelineEmbed
                source="profile"
                screenName="iHrithik"
                options={{height:400}}/>
            <TwitterShareButton 
                url={"https://www.facebook.com/tushar.kumarshah.31/"}
                options={{text:"#reacjs is awesome",via:"Tushars46106674"}}/>
            </div>
        </div>
    );
}