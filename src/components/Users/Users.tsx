import React from "react";
import styles from "./users.module.css";

// type PropsType = {
//     users: Array<any>
// }

let Users = (props: any) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
                    followed: false,
                    fullName: "Dmitry",
                    status: "I am a boss",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
                    followed: true,
                    fullName: "Sasha",
                    status: "I am a boss too",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 3,
                    photoUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png", fullName: "Andrew",
                    status: "I am a boss too",
                    location: {city: "Kiev", country: "Ukraine"}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt="avatar"/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => { props.unFollow(u.id) } }>Unfollow</button>
                                : <button onClick={ () => { props.follow(u.id) } }>Follow</button> }
                        </div>
                    </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;