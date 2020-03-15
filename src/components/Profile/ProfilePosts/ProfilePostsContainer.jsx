import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {ADD_POST, UPDATE_NEW_POST} from "../../../redux/profileReducer";


let mapStateToProps = (state) => {
    return {
        data: state.ProfilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (text) => {
            return dispatch({type: UPDATE_NEW_POST, text: text});
        },
        onAddPost: () => {
            return dispatch({type: ADD_POST});
        }
    }
};

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer