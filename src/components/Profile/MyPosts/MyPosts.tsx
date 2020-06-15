import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {TypeMyPosts} from "../../../redux/state";


type PropType = {
    posts:Array<TypeMyPosts>
}

const MyPosts = (props: PropType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;