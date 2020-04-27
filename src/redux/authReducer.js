import {authAPI} from "../api/api";
import {setProfileInfo} from "./profileReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH = 'SET_AUTH';
const INITIALIZE = 'INITIALIZE'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    initialized: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            };
        case INITIALIZE:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;

    }
};

export default authReducer;

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setAuth = (isAuth) => ({type: SET_AUTH, isAuth});
export const initialize = () => ({type: INITIALIZE});
export const AuthMe = () => async (dispatch) => {
    let data = await authAPI.me();

    if (data.isAuth) {
        const {id, email, login} = data;
        dispatch(setUserData(id, email, login));
    } else {
        if (data.isAuth === false)
            dispatch(setAuth(false));
    }
    dispatch(initialize());
};
export const login = (userAuthData) => async (dispatch) => {
    let data = await authAPI.login(userAuthData);

    if (data.isAuth) {
        const {id, email, login} = data;

        dispatch(setUserData(id, email, login));
    } else {
        if (data.isAuth === false) {
            dispatch(setAuth(false));
            dispatch(stopSubmit("login", {_error: "Login or password incorrect"}));
        }
    }
};

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.isAuth === false) {
        dispatch(setAuth(false));
        dispatch(setProfileInfo(null));
    }
};