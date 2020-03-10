import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 12},
                {id: 2, message: 'hello', likesCount: 10},
                {id: 3, message: 'meow', likesCount: 20}
            ],
            currentPost: ""
        },
        DialogsPage: {
            dialogs: [
                {id: 1, name: 'Барсик'},
                {id: 2, name: 'Шарик'},
                {id: 3, name: 'Кузя'},
                {id: 4, name: 'Машка'}],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'meow'}],
            currentMessage:""
        }
    },
    getState() {
        return this._state;
    },
    _render() {
        return alert('state is change');
    },
    setRender(newRender) {
        this._render = newRender
    },
    dispatch(action) {
        this._state.ProfilePage=profileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage=dialogsReducer(this._state.DialogsPage, action);
        this._render();
    }
};

export default store;