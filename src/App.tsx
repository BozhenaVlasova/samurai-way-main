import React from 'react';
import './App.css';
import {NavBar} from "./Components/Navbar/NavBar";
import {Route} from "react-router-dom";
import DialogsComponent from "./Components/Dialogs/DialogsComponent";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


const App = () => {
    return (
            <div className="app">
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsComponent />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>
            </div>
    );
}

export default App;
