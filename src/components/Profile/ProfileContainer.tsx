import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {compose} from "redux";

type PathParamsType = {
    userId: any
}

type MapStateToPropsType = {
    profile: any
    isAuth: any
    status: string
    updateStatus: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9422;
        }
        this.props.getUserProfile(userId);
        // setTimeout(() => {
            this.props.getStatus(userId);
        // }, 1000);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }

}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose<any>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);