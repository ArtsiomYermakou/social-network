import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}



const Profile = (props:PropType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;