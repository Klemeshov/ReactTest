import React from 'react'
import classes from './ProfilePosts.module.css'

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
        props.onChangePost(newPostElement.current.value);
    };

    let addPost = () => {
        props.onAddPost();
    };

    return (
        <div className={classes.ProfilePosts}>
            <textarea ref={newPostElement} value={props.currentPost} onChange={onChangePost}/>
            <button onClick={addPost}>Add post</button>
            {props.posts.map(item =>
                <Post message={item.message} likesCount={item.likesCount} key={item.id}/>
            )}
        </div>
    )
};

export default ProfilePosts
