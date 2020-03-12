import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header className='HeaderContent'/>
            <div className="MainBar">
                <NavBar className='Navigation'/>
                <div className='MainContent'>
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;