import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {

}


const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                // store={props.store}
                // dispatch={props.dispatch}
                // posts={props.profilePage.posts}
                // newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile;