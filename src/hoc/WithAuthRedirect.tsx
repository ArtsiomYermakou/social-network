import React, {Component} from "react";
import {Redirect} from "react-router"
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any, any> {
        render () {
            if (!this.props.isAuth) return <Redirect to="/login" />
            return <Component {...this.props} />
        }
    }



    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}