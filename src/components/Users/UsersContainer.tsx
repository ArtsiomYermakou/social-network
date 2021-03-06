import React from "react";
import {connect} from "react-redux";
import {unfollow, follow, requestUsers} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount, getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";

type MapStatePropsType = {
	currentPage: number
	pageSize: number
	isFetching: boolean
	totalUsersCount: number
	users: Array<UserType>
	followingInProgress: Array<number>
}

type MapDispatchPropsType = {
	getUsers: (currentPage: number, pageSize: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

type OwnPropsType = {
	pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber: number) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <div style={{backgroundColor: "#C4DFE6"}}>
			<h2 style={{backgroundColor: "#C4DFE6"}}>{this.props.pageTitle}</h2>
			{this.props.isFetching ? <Preloader/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				   pageSize={this.props.pageSize}
				   currentPage={this.props.currentPage}
				   onPageChanged={this.onPageChanged}
				   users={this.props.users}
				   follow={this.props.follow}
				   unfollow={this.props.unfollow}
				   followingInProgress={this.props.followingInProgress}
			/>
		</div>
	}
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
		mapStateToProps,
		{follow, unfollow, getUsers: requestUsers})
)(UsersContainer);