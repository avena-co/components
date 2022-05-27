import React from 'react';

// components
import {
    Button
} from 'components';

// styles
import styles from './button.module.scss';


const ButtonPage = ({ className, children, ...props }) => {
    return (
        <div className={[styles.button, className].join(' ')} {...props}>
            <p>type Props: primary(default), secondary, tertiary</p>
            <p>size Props: large, medium(default), small</p>
            <Button type='secondary' size='small'>Test Button</Button>
        </div>
    );
};

export default ButtonPage;
