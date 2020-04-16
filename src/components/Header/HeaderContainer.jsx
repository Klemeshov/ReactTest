import React from "react";
import Header from "./Header";
import {AuthMe, setUserData} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.AuthMe();
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
export default connect(mapStateToProps, {setUserData, AuthMe})(HeaderContainer);