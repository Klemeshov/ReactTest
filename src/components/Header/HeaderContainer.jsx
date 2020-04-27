import React from "react";
import Header from "./Header";
import {logout} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
                    logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {logout})(HeaderContainer);