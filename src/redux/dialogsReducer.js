export const ADD_MESSAGE = "ADD_MESSAGE";
export const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: 5, message: state.currentMessage};
            state.messages.push(newMessage);
            state.currentMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.currentMessage = action.text;
            return state;
        default:
            return state;
    }
};
export default dialogsReducer;