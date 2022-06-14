import React from 'react';

// components
import {
    Button,
    Input
} from 'components';

// styles
import styles from './button.module.scss';


const ButtonPage = ({ className, children, ...props }) => {
    return (
        <div className={[styles.button, className].join(' ')} {...props}>
            <p>type Props: primary(default), secondary, tertiary</p>
            <p>size Props: large, medium(default), small</p>
            <div className={styles.buttonContainer}>
                <Button size='small'>Primary-Small</Button>
                <Button size='small' type='secondary' >Secondary-Small</Button>
                <Button size='small' type='tertiary' >Tertiary-Small</Button>
                <Button size='small' disabled={true}>Primary-Small-Disabled</Button>
                <Button size='small' type='secondary' disabled={true}>Secondary-Small-Disabled</Button>
                <Button size='small' type='tertiary' disabled={true}>Tertiary-Small</Button>
            </div>
            <br />
            <div className={styles.buttonContainer}>
                <Button >Primary-Default</Button>
                <Button type='secondary' >Secondary-Default</Button>
                <Button type='tertiary' >Tertiary-Default</Button>
                <Button disabled={true}>Primary-Default-Disabled</Button>
                <Button type='secondary' disabled={true}>Secondary-Default-Disabled</Button>
                <Button type='tertiary' disabled={true}>Tertiary-Default</Button>
            </div>
            <br />
            <div className={styles.buttonContainer}>
                <Button size='large'>Primary-Large</Button>
                <Button size='large' type='secondary' >Secondary-Large</Button>
                <Button size='large' type='tertiary' >Tertiary-Large</Button>
                <Button size='large' disabled={true}>Primary-large-Disabled</Button>
                <Button size='large' type='secondary' disabled={true}>Secondary-large-Disabled</Button>
                <Button size='large' type='tertiary' disabled={true}>Tertiary-Large</Button>
            </div>
            <br />
            <Input type="password" />
        </div>
    );
};

export default ButtonPage;
