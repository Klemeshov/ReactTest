import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import Login from "./Login";

const mapStateToProps = (state) => (
    {
        message: state.auth.message,
        isAuth: state.auth.isAuth
    }
);
export default connect(mapStateToProps, {login})(Login);
