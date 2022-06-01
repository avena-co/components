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
            <Button size='small'>Primary</Button>
            <Button type='secondary' size='small'>Secondary</Button>
            <Button type='tertiary' size='small'>Tertiary</Button>
        </div>
    );
};

export default ButtonPage;
