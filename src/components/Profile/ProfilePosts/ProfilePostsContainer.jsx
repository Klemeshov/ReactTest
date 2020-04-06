import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {addPost, updateNewPost} from "../../../redux/profileReducer";


let mapStateToProps = (state) => {
    return {
        data: state.ProfilePage
    }
};


const ProfilePostsContainer = connect(mapStateToProps,
    {
        onChangePost: updateNewPost,
        onAddPost: addPost
    })(ProfilePosts);

export default ProfilePostsContainer