import React from 'react';

// styles
import styles from './row.module.scss';

const alignment = {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end'
}

const Row = ({ className, style, children, align = 'top', gutter = 16, ...props }) => {
    const rowStyle = {
        alignItems: alignment[align],
        gap: `${gutter}px`,
        ...style
    };

    return (
        <div className={[styles.row, className].filter(Boolean).join(' ')} style={rowStyle} {...props}>
            {children}
        </div>
    );
};

export default Row;
