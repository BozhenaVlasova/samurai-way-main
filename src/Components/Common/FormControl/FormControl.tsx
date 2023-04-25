import React from 'react';
import styles from './FormControl.module.css'

const FormControl = (props: any) => {
    const {input, meta, child, ...restProps} = props
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    );
};

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input}{...restProps}   /></FormControl>
};

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
};