import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
            <ProfileInfo className={classes.Profile__Info}/>
            <ProfilePosts className={classes.Profile__Posts}
                          posts={props.data.posts}
                          currentPost={props.data.currentPost}
                          dispatch = {props.dispatch}/>
        </div>
    );
};

export default Profile;