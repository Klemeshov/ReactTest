import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from "redux-form";
import thunk from "redux-thunk";

let reducers = combineReducers(
    {
        ProfilePage: profileReducer,
        DialogsPage: dialogsReducer,
        UsersPage: usersReducer,
        auth: authReducer,
        form: formReducer
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

//let store = createStore(reducers, applyMiddleware(thunk));

window.__store__ = store;

export default store;