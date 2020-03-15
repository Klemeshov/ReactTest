export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

let initialState = {
    posts: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'hello', likesCount: 10},
        {id: 3, message: 'meow', likesCount: 20}
    ],
    currentPost: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.currentPost, likesCount: 0};
            return {
                ...state,
                posts: [newPost, ...state.posts],
                currentPost: ''
            };
        case UPDATE_NEW_POST:
            return {
                ...state,
                currentPost: action.text
            };
        default:
            return state;
    }
};
export default profileReducer;