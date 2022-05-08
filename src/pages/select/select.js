import React, { useState } from 'react';

// components
import {
    HStack,
    Select
} from 'components';

// data
import colors from './colors.json';

// styles
import styles from './select.module.scss';

const ColorOptionRenderer = o => <HStack style={{ alignItems: 'center', padding: '8px 0px' }}><div style={{ backgroundColor: o.value, borderRadius: '50%', boxShadow: '0px 1px 1px #c4c4c4', width: '16px', height: '16px', margin: '8px' }} />{o.label}</HStack>;

const SelectPage = ({ className, children, ...props }) => {
    const [state, setState] = useState({
        color: ''
    });

    const handleChange = e => {
        setState(state => ({
            ...state,
            [e.name]: e.value
        }));
    }

    return (
        <div className={[styles.select, className].join(' ')} {...props}>
            <Select name='color' label='Color' options={colors} value={state.color} optionRenderer={ColorOptionRenderer} onChange={handleChange} />
        </div>
    );
};

export default SelectPage;
