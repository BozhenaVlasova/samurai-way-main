import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {CommonAT, StoreType} from "./Redux/store";

export type AppPropsType = {
    store: any
    dispatch: (action: CommonAT) => void
}

const App: React.FC<AppPropsType> = (props) => {
    return (
            <div className="app">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.store.getState().dialogsPage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.store.getState().profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                </div>
            </div>
    );
}

export default App;
