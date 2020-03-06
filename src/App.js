import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header className='HeaderContent'/>
                <div className="MainBar">
                    <NavBar className='Navigation'/>
                    <div className='MainContent'>
                        <Route path = '/profile' component={Profile}/>
                        <Route path = '/dialogs' component={Dialogs}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;