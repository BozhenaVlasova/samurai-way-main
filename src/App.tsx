import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, state} from "./Redux/state";



const App  = () => {
    return (
        <BrowserRouter>
        <div className="app">
            <Header />
            <NavBar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage} /> }/>
                <Route path='/profile' render={() => <Profile state={state.profilePage} addPost={addPost}/>} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
