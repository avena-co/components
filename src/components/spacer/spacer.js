import React from 'react';

// styles
import styles from './spacer.module.scss';

const Spacer = ({ className, children, ...props }) => {
    return (
        <div className={[styles.spacer, className].join(' ')} {...props}>
            {children}
        </div>
    );
};

export default Spacer;
