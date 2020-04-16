import React from 'react'
import classes from './ProfileInfo.module.css'
import avatar from './../../../assets/img/Profile/avatar.jpg'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    return(
        <div className={classes.ProfileInfo}>
            <img className={classes.ProfileInfo__avatar}
                 src={avatar}
                 alt={'avatar'}/>
            <div className={classes.ProfileInfo__info}>
                <div className={classes.ProfileInfo__Name}>
                    {props.profileInfo.fullName}
                </div>
                <div className={classes.ProfileInfo__aboutMe}>
                    <ProfileStatus status = {props.profileInfo.status}/>
                    {props.profileInfo.location.country}<br/>
                    {props.profileInfo.location.city}<br/>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo