import AutoComplete from 'components/auto-complete'
import React, { useState } from 'react'
import styles from './auto-complete.module.scss';


const AutoCompletePage = ({ className, children, ...props }) => {
    const options = [
        {
            value: 'Burns Bay Road',
        },
        {
            value: 'Downing Street',
        },
        {
            value: 'Wall Street',
        },
    ];
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event)
    }

    return (
        <div className={[styles.autoComplete, className].join(' ')} {...props}>
            <AutoComplete options={options} value={value} onChange={handleChange} style={{ width: '200px' }}/>
        </div>
    )
}

export default AutoCompletePage