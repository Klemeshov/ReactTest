import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getProfile, setProfileInfo, updateStatus} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.PureComponent {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getProfile(id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profileInfo) {
            let id = this.props.match.params.id;
            if (!id) {
                id = this.props.id;
            }

            if (prevProps.profileInfo._id !== id) {
                this.props.getProfile(id);
            }
        }
    }

    render() {
        if (!this.props.profileInfo) {
            return <Preloader/>
        }
        return (
            <Profile profileInfo={this.props.profileInfo}
                     updateStatus={this.props.updateStatus}
                     posts={this.props.posts}
                     addPost={this.props.addPost}/>
        )
    }
}

const mapStateToProps = (state) => (
    {
        profileInfo: state.ProfilePage.profileInfo,
        id: state.auth.id,

        posts: state.ProfilePage.posts
    }
);

export default compose(
    connect(mapStateToProps, {setProfileInfo, getProfile, updateStatus, addPost}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)