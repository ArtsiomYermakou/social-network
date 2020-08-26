import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {TypeMyPosts} from "../../../redux/store";

type PropType = {
    posts: Array<TypeMyPosts>
    newPostText: string
    addPost:()=> void
    updateNewPostText: (text: string)=> void
}

const MyPosts = (props: PropType) => {

    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   key={p.id}
                                                   likesCount={p.likesCount}/>)

    type newPostType = RefObject<any>;

    let newPostElement:newPostType = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;