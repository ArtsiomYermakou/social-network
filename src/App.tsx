import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter, Switch, Redirect, HashRouter} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";

import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const LoginPage = React.lazy(() => import("./components/Login/Login"))


class App extends React.Component <any> {
    catchAllUnhandledErrors = (reason: any) => {
        // alert("Some Error");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <React.Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path='/'
                                   render={() =>  <Redirect to={"/profile"} />} />

                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}/>

                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>

                            <Route path="/users"
                                   render={() => <UsersContainer pageTitle={"Samurai"}/>}/>

                            <Route path="/login"
                                   render={() => <LoginPage/>}/>

                            <Route path="*"
                                   render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </React.Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<any>(withRouter, connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJsApp = (props: any) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJsApp;
