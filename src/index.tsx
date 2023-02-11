import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StateType} from "./Redux/state";


const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);