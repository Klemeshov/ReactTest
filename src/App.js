import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import {AuthMe} from "./redux/authReducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

const MainContent = React.lazy(() => import("./components/MainContent/MainContent"));

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
                    <React.Suspense fallback={<Preloader/>}>
                        <MainContent className='MainContent'/>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    initialize: state.auth.initialized
});


export default connect(mapStateToProps, {AuthMe})(App);