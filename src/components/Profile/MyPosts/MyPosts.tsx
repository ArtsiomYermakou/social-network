import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {TypeMyPosts} from "../../../redux/store";
import {reduxForm, Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type PropType = {
    posts: Array<TypeMyPosts>
    newPostText?: string
    addPost: (values: string) => void
    updateNewPostText?: (text: any) => void
}

const MyPosts = (props: PropType) => {

    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   key={p.id}
                                                   likesCount={p.likesCount}/>)

    type newPostType = RefObject<any>;

    let newPostElement: newPostType = React.createRef();

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                       component={Textarea}
                       validate={ [required, maxLength10]} placeholder={"Post message"} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;