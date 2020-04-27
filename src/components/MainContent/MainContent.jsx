import React from "react";
import {Route} from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import Preloader from "../common/Preloader/Preloader";
import UsersContainer from "../Users/UsersContainer";

const LoginContainer = React.lazy(()=>import("../Login/LoginContainer"));
const DialogsContainer = React.lazy(() => import("./../Dialogs/DialogsContainer"));

const MainContent = (props) => {
    return (
        <div>
            <Route path='/profile/:id?'
                   render={() => <ProfileContainer/>}/>
            <Route path='/dialogs'
                   render={() => (
                       <React.Suspense fallback={<Preloader/>}>
                           <DialogsContainer/>
                       </React.Suspense>
                   )}/>
            <Route path='/users'
                   render={() => <UsersContainer/>}/>
            <Route path='/login'
                   render={() => (
                       <React.Suspense fallback={<Preloader/>}>
                           <LoginContainer/>
                       </React.Suspense>
                   )}/>
        </div>
    )
};

export default MainContent