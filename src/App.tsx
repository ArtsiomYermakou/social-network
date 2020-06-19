import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import {RootStateType} from "./redux/state";

type PropType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    // profilePage: RootStateType
    // newPostText: string
    updateNewPostText: (newText: string) => void
}

const App = (props: PropType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs
                    state={props.state.dialogsPage}/>}/>

                <Route path="/profile" render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />} />
            </div>
        </div>
    );
}

export default App;
