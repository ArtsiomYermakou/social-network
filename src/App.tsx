import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom"
import {ActionType, RootStateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    dispatch: (action: ActionType) => void
    store: any
    state: RootStateType
}

const App = (props: PropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={ () => <DialogsContainer
                           store={props.store} dispatch={props.dispatch}/>}/>

                <Route path="/profile" render={() =>
                    <Profile store={props.store} dispatch={props.dispatch} profilePage={props.state.profilePage}/>}/>
            </div>
        </div>
    );
}

export default App;
