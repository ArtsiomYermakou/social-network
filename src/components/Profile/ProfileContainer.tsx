import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {Redirect} from "react-router"
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type PathParamsType = {
    userId: any
}

type MapStateToPropsType = {
    profile: any
    isAuth: any
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} prfile={this.props.profile}/>
        )
    }

}
//HOC
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);