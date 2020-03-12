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
            const newPost = {id: 5, message: state.currentPost, likesCount: 0};
            state.posts.push(newPost);
            state.currentPost = '';
            return state;
        case UPDATE_NEW_POST:
            state.currentPost = action.text;
            return state;
        default:
            return state;
    }
};
export default profileReducer;