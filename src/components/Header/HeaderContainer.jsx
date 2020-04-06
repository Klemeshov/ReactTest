import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {setUserData} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:5000/auth/me`, {withCredentials: true}).then(response => {
            const {id, email, login} = response.data;
            this.props.setUserData(id, email, login);
        })
    }

    render() {
        return (
            <Header isAuth = {this.props.isAuth}
                    login = {this.props.login}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {setUserData})(HeaderContainer);