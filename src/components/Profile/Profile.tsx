import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DialogPageType, ProfilePageType} from "../../redux/state";

type PropType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}



const Profile = (props:PropType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;