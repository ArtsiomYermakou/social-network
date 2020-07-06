import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profile-reducer";
import {ActionType, TypeMyPosts} from "../../../redux/state";

type PropType = {
    posts: Array<TypeMyPosts>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: PropType) => {

    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   likesCount={p.likesCount}/>)

    type newPostType = RefObject<any>;

    let newPostElement:newPostType = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = changeNewTextActionCreator(text);
        props.dispatch(action);
    }

    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value;
    //     props.dispatch(changeNewTextActionCreator(text));
    // }
debugger
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;