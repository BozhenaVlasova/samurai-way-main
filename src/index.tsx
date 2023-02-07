import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StateType} from "./Redux/state";


const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);