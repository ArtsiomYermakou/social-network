import React, {FC} from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/businessperson-computer-icons-avatar-clip-art-avatar.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";


type PropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	users: Array<UserType>
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	followingInProgress: any
}

let Users: FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
	return <div style={{backgroundColor: "#C4DFE6"}}>
		<Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
				   onPageChanged={onPageChanged}/>
		{
			users.map((u: any) => <div style={{backgroundColor: "#C4DFE6"}} key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null
								? u.photos.small
								: userPhoto} className={styles.userPhoto} alt="avatar"/>
                        </NavLink>
                        </div>
                        <div>
                            {u.followed
								? <button disabled={props.followingInProgress.some((id: number) => id === u.id)}
										  onClick={() => {
											  props.unfollow(u.id);
										  }}>Unfollow</button>

								: <button disabled={props.followingInProgress.some((id: any) => id === u.id)}
										  onClick={() => {
											  props.follow(u.id);
										  }}>Follow</button>}
                        </div>
                    </span>
				<span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
			</div>)
		}
	</div>
}

export default Users;