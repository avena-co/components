import React from 'react';

// styles
import styles from './card.module.scss';

const Card = ({ className, children, ...props }) => {
    return (
        <div className={[styles.card, className].filter(Boolean).join(' ')} {...props}>
            {children}
        </div>
    );
};

export default Card;
