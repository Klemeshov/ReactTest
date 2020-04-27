import React from 'react'
import classes from './ProfilePosts.module.css'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/Forms/Forms";
import {maxLength, required} from "../../../validators/validators";

const maxLength100 = maxLength(100);

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

const AddPostForm = reduxForm({form: "addPost"})((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} name="Post" validate={[required, maxLength100]} placeholder="Add post"/>
            <button>Add post</button>
        </form>
    )
});

const ProfilePosts = (props) => {

    let addPost = (value) => {
        props.addPost(value.Post);
    };

    return (
        <div className={classes.ProfilePosts}>
            <AddPostForm onSubmit={addPost}/>

            <div>
                {props.posts.map(item =>
                    <Post message={item.message} likesCount={item.likesCount} key={item.id}/>
                )}
            </div>
        </div>
    )
};

export default ProfilePosts
