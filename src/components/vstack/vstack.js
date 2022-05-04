import React from 'react';

// styles
import styles from './vstack.module.scss';

const VStack = ({ className, children, ...props }) => {
    return (
        <div className={[styles.vstack, className].filter(Boolean).join(' ')} {...props}>
            {children}
        </div>
    );
};

export default VStack;
