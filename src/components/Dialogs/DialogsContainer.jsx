import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {ADD_MESSAGE, UPDATE_NEW_MESSAGE} from "../../redux/dialogsReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        data: state.DialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch({type: ADD_MESSAGE});
        },
        onChangeCurrentMessage: (text) => {
            dispatch({type: UPDATE_NEW_MESSAGE, text: text});
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);