import React from 'react';

// styles
import styles from './hstack.module.scss';

const HStack = ({ className, children, ...props }) => {
    return (
        <div className={[styles.hstack, className].filter(Boolean).join(' ')} {...props}>
            {children}
        </div>
    );
};

export default HStack;
