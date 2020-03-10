import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"

function App(props) {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header className='HeaderContent'/>
                <div className="MainBar">
                    <NavBar className='Navigation'/>
                    <div className='MainContent'>
                        <Route path='/profile'
                               render={() =>
                                   <Profile
                                       data={props.state.ProfilePage}
                                       dispatch={props.dispatch}
                                   />}/>
                        <Route path='/dialogs'
                               render={() =>
                                   <Dialogs
                                       data={props.state.DialogsPage}
                                       dispatch={props.dispatch}
                                   />}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;