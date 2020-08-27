import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm, Field} from "redux-form";


const maxLengthMessage50 = maxLengthCreator(50);

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={ [required, maxLengthMessage50] }
                       name="newMessageBody"
                       placeholder="Enter your message"/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialogs-add-message-form"})(AddMessageForm);