import React from 'react';

// styles
import styles from './button.module.scss';

const Button = ({ className, children, size, type, ...props }) => {
    // type => primary(default), secondary, tertiary
    // size => large, medium(default), small
    let typeStyle = styles.primary;
    switch (type) {
        case 'primary':
            typeStyle = styles.primary;
            break;
        case 'secondary':
            typeStyle = styles.secondary;
            break;
        case 'tertiary':
            typeStyle = styles.tertiary;
            break;
        default:
            typeStyle = styles.primary;
            break;
    }

    let sizeStyle = null;
    switch (size) {
        case 'large':
            sizeStyle = styles.paddingLarge;
            break;
        case 'medium':
            sizeStyle = null;
            break;
        case 'small':
            sizeStyle = styles.paddingSmall;
            break;
        default:
            sizeStyle = null;
            break;
    }
    return (
        <button className={[styles.button, className, typeStyle, sizeStyle].filter(Boolean).join(' ')} {...props}>
            {children}
        </button>
    );
};

export default Button;
