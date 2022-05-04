import React from 'react';

// styles
import styles from './col.module.scss';

const Col = ({ className, children, span, xs, sm, md, lg, xl, ...props }) => {
    const xs1 = xs || span || 24;
    const sm1 = sm || xs1;
    const md1 = md || sm1;
    const lg1 = lg || md1;
    const xl1 = xl || lg1;


    const classNames = [
        styles[`col-xs-${xs1}`],
        styles[`col-sm-${sm1}`],
        styles[`col-md-${md1}`],
        styles[`col-lg-${lg1}`],
        styles[`col-xl-${xl1}`]
    ];

    return (
        <div className={[styles.col, ...classNames, className].filter(Boolean).join(' ')} {...props}>
            {children}
        </div>
    );
};

export default Col;
