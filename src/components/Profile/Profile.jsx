import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <ProfileInfo className={classes.Profile__Info}/>
            <ProfilePosts className={classes.Profile__Posts}/>
        </div>
    );
};

export default Profile;