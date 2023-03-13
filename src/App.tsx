import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/NavBar";
import {Route} from "react-router-dom";
import DialogsComponent from "./Components/Dialogs/DialogsComponent";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = () => {
    return (
            <div className="app">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsComponent />}/>
                    <Route path='/profile' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>
            </div>
    );
}

export default App;
