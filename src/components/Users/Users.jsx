import React from 'react'
import classes from './Users.module.css'
import {NavLink} from "react-router-dom";

let User = (props) => {
    return (
        <div className={classes.User}>
            <div className={classes.User__button}>
                {props.user.followed
                    ? <button className={classes.Button} onClick={() => {
                        (props.onUnfollow(props.user.id))
                    }}>unfollow</button>
                    : <button className={classes.Button} onClick={() => {
                        props.onFollow(props.user.id)
                    }}>follow</button>}
            </div>
            <div className={classes.User__info}>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <div className={classes.User__name}>{props.user.fullName}</div>
                    </NavLink>
                    <div className={classes.User__status}>{props.user.status}</div>
                </div>
                <div className={classes.User__location}>
                    {props.user.location.country + ", " + props.user.location.city}
                </div>

            </div>
        </div>
    )
};

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={classes.Users}>
            <div className={classes.Users__text}>Users:</div>
            {props.users.map(u => {
                return <User key={u.id} user={u} onFollow={props.onFollow}
                             onUnfollow={props.onUnfollow}/>
            })}
            <div className={classes.Pages}>
                {pages.map(page => (
                    <span key = {page+Number(1)} className={page === props.currentPage
                        ? classes.currentPage
                        : classes.Page}
                          onClick={() => {
                              props.changePage(page)
                          }}>
                        {page + Number(1)}
                    </span>))}
            </div>
        </div>
    );
};


export default Users;