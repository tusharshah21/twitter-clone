import React from "react";
import './Sidebar.css';
import SidebarOption from './SidebarOption.js';



import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';

export default function Sidebar(){
    return(
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar_twitterIcon"/>
            {/* SidebarOption      */}
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
            <SidebarOption Icon={MailOutlineIcon} text="Mail" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
            <SidebarOption Icon={ListAltIcon} text="List" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* Button->tweet */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Twitter</Button>


            

        </div>
    );
}