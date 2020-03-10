export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const profileReducer = (state, action) => {
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