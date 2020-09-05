import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/businessperson-computer-icons-avatar-clip-art-avatar.jpg";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: any
}

let Users = (props: PropsType) => {
    return <div>
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>
        {
            props.users.map((u: any) => <div key={u.id}>
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