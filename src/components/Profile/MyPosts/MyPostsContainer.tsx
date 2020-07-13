import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionType, TypeMyPosts} from "../../../redux/store";
import MyPosts from "./MyPosts";

type PropType = {
    posts: Array<TypeMyPosts>
    newPostText: string
    dispatch: (action: ActionType) => void
    store: any
}

const MyPostsContainer = (props: PropType) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText} dispatch={props.dispatch}
        />
    )
}

export default MyPostsContainer;