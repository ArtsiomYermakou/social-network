import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";




const Profile = (props:ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
    )
}

export default Profile;