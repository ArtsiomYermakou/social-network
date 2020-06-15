import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string,
    likesCount: number,
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/736x/1f/40/8d/1f408d7c2ad61ec6a4c8c28bd851fe85--my-works-mice.jpg'/>
            {props.message}
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>

    )
}


export default Post;