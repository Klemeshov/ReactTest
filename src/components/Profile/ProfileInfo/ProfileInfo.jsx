import React from 'react'
import classes from './ProfileInfo.module.css'
import avatar from './../../../assets/img/Profile/avatar.jpg'

const ProfileInfo = () => {
    return(
        <div className={classes.ProfileInfo}>
            <img className={classes.ProfileInfo__avatar}
                 src={avatar}
                 alt={'avatar'}/>
            <div className={classes.ProfileInfo__info}>
                <div className={classes.ProfileInfo__Name}> Кот Иван</div>
                <div className={classes.ProfileInfo__aboutMe}>
                    Статус: Нужен хозяин<br/>
                    Год рождения: 2016<br/>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo