import React from "react";
import styles from "../FormsControls/FormsControls.module.css"
import {Field} from "redux-form";

const FormControl = (props: any) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.child}
            </div>
            {hasError && <span className={styles.error}>{props.meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...props.input} {...props} />
            </div>
            {hasError && <span className={styles.error}>{props.meta.error}</span>}
        </div>
    )
}

export const Input = (props: any) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...props.input} {...props} />
            </div>
            {hasError && <span className={styles.error}>{props.meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder: string | null, name: string, validators: any, component: any, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)
