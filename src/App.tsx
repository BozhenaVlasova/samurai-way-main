import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {CommonAT, StoreType} from "./Redux/state";

export type AppPropsType = {
    store: StoreType
    dispatch: (action: CommonAT) => void
}

const App: React.FC<AppPropsType>  = (props) => {
    return (
        <BrowserRouter>
        <div className="app">
            <Header />
            <NavBar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs state={props.store.getState().dialogsPage} /> }/>
                <Route path='/profile' render={() => <Profile profilePage={props.store.getState().profilePage}
                                                              dispatch={props.dispatch}/>} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
