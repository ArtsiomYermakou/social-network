import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PropType = {
    // posts: Array<TypeMyPosts>
    // newPostText: string
    // store: any
}

const MyPostsContainer = (props: PropType) => {





    return (
        <StoreContext.Consumer>
            { (store:any) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}

            />}
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;