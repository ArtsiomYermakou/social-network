import React from "react";
import styles from "../FormsControls/FormsControls.module.css"

const FormControl = (props: any) => {
    const hasError = props.meta.touched &&  props.meta.error;
    return (
        <div className={styles.formControl + " " + ( hasError ? styles.error : "") }>
            <div>
                {props.child}
            </div>
            { hasError && <span className={styles.error}>{props.meta.error}</span> }
        </div>
    )
}

export const Textarea = (props: any) => {
    const hasError = props.meta.touched &&  props.meta.error;
    return (
        <div className={styles.formControl + " " + ( hasError ? styles.error : "") }>
            <div>
                <textarea {...props.input} {...props} />
            </div>
            { hasError && <span className={styles.error}>{props.meta.error}</span> }
        </div>
    )
}

export const Input = (props: any) => {
    const hasError = props.meta.touched &&  props.meta.error;
    return (
        <div className={styles.formControl + " " + ( hasError ? styles.error : "") }>
            <div>
                <input {...props.input} {...props} />
            </div>
            { hasError && <span className={styles.error}>{props.meta.error}</span> }
        </div>
    )
}