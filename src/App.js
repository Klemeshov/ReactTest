import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {AuthMe} from "./redux/authReducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.AuthMe();
    }
    render() {
        if (!this.props.initialize)
            return <Preloader/>;
        return (
            <div className='app-wrapper'>
                <HeaderContainer className='HeaderContent'/>
                <div className="MainBar">
                    <NavBar className='Navigation'/>
                    <div className='MainContent'>
                        <Route path='/profile/:id?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <LoginContainer/>}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    initialize: state.auth.initialized
});

export default connect(mapStateToProps, {AuthMe})(App);