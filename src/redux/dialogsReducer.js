export const ADD_MESSAGE = "ADD_MESSAGE";
export const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Барсик'},
        {id: 2, name: 'Шарик'},
        {id: 3, name: 'Кузя'},
        {id: 4, name: 'Машка'}],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'meow'}],
    currentMessage:""
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: 5, message: state.currentMessage};
            return {
                ...state,
                messages: [...state.messages, newMessage],
                currentMessage: ""
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                currentMessage: action.text
            };
        default:
            return state;
    }
};
export default dialogsReducer;