import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    profileInfo: null,
    posts: []
};
let id = 0;

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: id, message: action.post, likesCount: 0};
            id++;
            return {
                ...state,
                posts: [newPost, ...state.posts],
            };

        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            };
        case SET_STATUS:
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    status: action.status
                }
            };
        case DELETE_POST:
            return {
                posts: state.posts.filter(p => p.id !== action.id)
            };
        default:
            return state;
    }
};
export default profileReducer;

export const addPost = (post) => ({type: ADD_POST, post});
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo});
export const deletePost = (id) => ({type: DELETE_POST, id});

export const getProfile = (id) => async (dispatch) => {
    let data = await profileAPI.getProfile(id);

    dispatch(setProfileInfo(data));
};
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.putStatus(status);

    if (data.isOk) {
        dispatch(setStatus(data.status))
    }

};