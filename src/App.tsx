import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsComponent from "./Components/Dialogs/DialogsComponent";


const App = () => {
    return (
            <div className="app">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsComponent />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                </div>
            </div>
    );
}

export default App;
