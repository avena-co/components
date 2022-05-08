import React, { useId, useState } from 'react';

// components
import HStack from '../hstack';
import VStack from '../vstack';

// styles
import styles from './select.module.scss';

const defaultOptionRenderer = o => <span style={{ padding: 'var(--avena-spacing-md) var(--avena-spacing-sm)' }}>{o.label}</span>;

const Select = ({ className, name, label, options, value, disabled, optionRenderer = defaultOptionRenderer, addonBefore, addonAfter, onChange, ...props }) => {
    const [isFocused, setFocused] = useState(false);

    const handleChange = e => {
        const value = e.value;

        if (onChange) {
            onChange({ name, value });
        }
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const handleFocus = () => {
        setFocused(true);
    };

    let labelStyle = {};
    let inputStyle = {};
    let optionsStyle = {
        height: isFocused ? '200px' : '0px'
    };

    if (value?.length > 0) {
        labelStyle = {
            font: 'var(--avena-font-xs-medium)',
            height: '18px'
        };

        inputStyle = {
            height: '24px'
        }
    }
    else {
        labelStyle = {
            font: 'var(--avena-font-m-medium)',
            height: '42px'
        };

        inputStyle = {
            height: '0px'
        }
    }

    const inputId = useId();
    return (
        <HStack className={[styles.select, disabled && styles.disabled, className].filter(Boolean).join(' ')} {...props}>
            {addonBefore}
            <VStack style={{ flex: '1 1 0px' }}>
                <label htmlFor={inputId} style={labelStyle}>{label}</label>
                <input id={inputId} style={inputStyle} type='text' value={options.find(o => o.value === value)?.label ?? ''} disabled={disabled} readOnly onBlur={handleBlur} onChange={handleChange} onFocus={handleFocus} />
            </VStack>
            {addonAfter}
            {isFocused ? (
                <div className={styles.options} style={optionsStyle}>
                    {options.map((o, index) => (
                        <div className={styles.option} key={index} onMouseDown={() => handleChange(o)}>{optionRenderer(o)}</div>
                    ))}
                </div>
            ) : undefined}
        </HStack>
    );
};

export default Select;
