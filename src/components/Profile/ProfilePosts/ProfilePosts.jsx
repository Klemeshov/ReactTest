import React from 'react'
import classes from './ProfilePosts.module.css'
import {ADD_POST, UPDATE_NEW_POST} from "../../../redux/profileReducer";

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <div className={classes.Message}>
                {props.message}
            </div>
            <div className={classes.LikesCount}>
                Likes:{props.likesCount}
            </div>
        </div>
    )
};

let newPostElement = React.createRef();
const ProfilePosts = (props) => {

    let onChangePost = () => {
        props.dispatch({type: UPDATE_NEW_POST, text: newPostElement.current.value});
    };

    let addPost = () => {
        props.dispatch({type: ADD_POST});
    };

    return (
        <div className={classes.ProfilePosts}>
            <textarea ref={newPostElement} value={props.currentPost} onChange={onChangePost}/>
            <button onClick={addPost}>Add post</button>
            {props.posts.map(item =>
                <Post message={item.message} likesCount={item.likesCount}/>
            )}
        </div>
    )
};

export default ProfilePosts
