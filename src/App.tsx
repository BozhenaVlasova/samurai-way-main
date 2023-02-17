import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import store from "./Redux/redux-store";
import DialogsComponent from "./Components/Dialogs/DialogsComponent";

export type AppPropsType = {
    store: typeof store
}

const App: React.FC<AppPropsType> = (props) => {
    return (
            <div className="app">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsComponent store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                </div>
            </div>
    );
}

export default App;
