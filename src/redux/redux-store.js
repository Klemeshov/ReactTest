import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers(
    {ProfilePage: profileReducer,
        DialogsPage: dialogsReducer,
        UsersPage: usersReducer,
        auth:authReducer});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;