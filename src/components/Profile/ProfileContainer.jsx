import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profileReducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id){
            id = this.props.id;
        }
        axios.get(`http://localhost:5000/profile/`+id).then(response => {
            this.props.setProfileInfo(response.data);
        })
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