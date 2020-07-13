import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
    store: any
}


const Profile = (props: PropType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                              dispatch={props.dispatch}
                              posts={props.profilePage.posts}
                              newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;