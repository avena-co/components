import React from 'react';

// styles
import styles from './button.module.scss';

const Button = ({ className, children, ...props }) => {
    return (
        <button className={[styles.button, className].filter(Boolean).join(' ')} {...props}>
            {children}
        </button>
    );
};

export default Button;
