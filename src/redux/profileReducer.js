import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_CURRENT_POST = 'UPDATE_CURRENT_POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

let initialState = {
    profileInfo: null,
    posts: [],
    currentPost: ""
};
let id = 0;

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.currentPost !== "") {
                let newPost = {id: id, message: state.currentPost, likesCount: 0};
                id++;
                return {
                    ...state,
                    posts: [newPost, ...state.posts],
                    currentPost: ''
                };
            }
            else{
                alert("Введите текст");
                return state;
            }
        case UPDATE_CURRENT_POST:
            return {
                ...state,
                currentPost: action.currentPost
            };
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            };
        default:
            return state;
    }
};
export default profileReducer;

export const addPost = () => ({type:ADD_POST});
export const updateNewPost = (currentPost) => ({type: UPDATE_CURRENT_POST, currentPost});
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo});
export const getProfile = (id) => (dispatch) => {
    usersAPI.getProfile(id).then(data => {
        dispatch(setProfileInfo(data));
    })
};