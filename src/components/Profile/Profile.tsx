import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DialogPageType, ProfilePageType} from "../../redux/state";

type PropType = {
    state: ProfilePageType
}



const Profile = (props:PropType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;