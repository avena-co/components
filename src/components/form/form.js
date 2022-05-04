import React from 'react';

// styles
import styles from './form.module.scss';

const Form = ({ className, children, ...props }) => {
    return (
        <div className={[styles.form, className].filter(Boolean).join(' ')} {...props}>
            {children}
        </div>
    );
};

export default Form;
