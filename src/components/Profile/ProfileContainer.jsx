import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            id = ""
        }
        getProfile(id).then(data => {
            this.props.setProfileInfo(data);
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profileInfo) {
            let id = this.props.match.params.id;
            if (!id) {
                id = this.props.id;
            }
            if (prevProps.profileInfo.id !== id) {
                getProfile(id).then(data => {
                    this.props.setProfileInfo(data);
                })
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
        id: state.auth.id
    }
);

export default connect(mapStateToProps, {setProfileInfo})(withRouter(ProfileContainer));