import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
            <ProfileInfo className={classes.Profile__Info}
                         profileInfo={props.profileInfo}
                         updateStatus={props.updateStatus}/>
            <ProfilePosts className={classes.Profile__Posts}
                          posts={props.posts}
                          addPost={props.addPost}/>
        </div>
    );
};


export default Profile;