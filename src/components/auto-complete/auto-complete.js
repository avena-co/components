import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import styles from './auto-complete.module.scss';

import { AutoComplete } from 'antd';

const AutoCompleteComp = ({ className, options, value, onChange, placeholder, ...props }) => {
    const [filteredOptions, setFilteredOptions] = useState([]);

    const handleChange = (data) => {
        onChange(data);
        setFilteredOptions(options.filter(el => el.value.toLowerCase().includes(data.toLowerCase())))
    };

    useEffect(() => {
        setFilteredOptions(options)
    }, []);
    
    return (
        <AutoComplete
            className={[styles.autoComplete, className].filter(Boolean).join(' ')}
            options={filteredOptions}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            {...props}
        />
    )

}

export default AutoCompleteComp;