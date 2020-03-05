import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
        <div className={classes.ProfileInfo}>
            <img className={classes.ProfileInfo__avatar}
                 src={'img/Profile/avatar.jpg'}
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