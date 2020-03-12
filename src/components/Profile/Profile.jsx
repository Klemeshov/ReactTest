import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
            <ProfileInfo className={classes.Profile__Info}/>
            <ProfilePostsContainer className={classes.Profile__Posts}/>
        </div>
    );
};

export default Profile;