import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navbar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./Redux/state";

export type AppPropsType = {
    store: StoreType
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
                                                              addPost={props.store.addPost.bind(props.store)}
                                                              updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
