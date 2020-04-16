import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setProfileInfo} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = Number(this.props.match.params.id);
        this.props.getProfile(id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profileInfo) {
            let id = Number(this.props.match.params.id);
            if (!id) {
                id = this.props.id;
            }

            if (prevProps.profileInfo.id !== id) {
                this.props.getProfile(id);
            }
        }
    }

    render() {
        if (!this.props.profileInfo) {
            return <Preloader/>
        }
        return (
            <Profile profileInfo={this.props.profileInfo}/>
        )
    }
}

const mapStateToProps = (state) => (
    {
        profileInfo: state.ProfilePage.profileInfo,
        id: state.auth.id,
    }
);

export default compose(
    connect(mapStateToProps, {setProfileInfo, getProfile}),
    withRouter
   // withAuthRedirect
)(ProfileContainer)