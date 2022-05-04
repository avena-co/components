import React, { useId, useState } from 'react';

// components
import HStack from '../components/hstack';
import Icon from '../components/icon';
import VStack from '../components/vstack';

// styles
import styles from './input.module.scss';

const Input = ({ className, type = 'text', name, label, placeholder, value, disabled, addonBefore, addonAfter, onChange, ...props }) => {
    const [isVisible, setVisible] = useState(false);
    const [isFocused, setFocused] = useState(false);

    const handleChange = e => {
        const value = e.target.value;

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

    if (value?.length > 0 || isFocused) {
        labelStyle = {
            font: 'var(--text-xs-medium) var(--font-family)',
            height: '18px'
        };

        inputStyle = {
            height: '24px'
        }
    }
    else {
        labelStyle = {
            font: 'var(--text-m-medium) var(--font-family)',
            height: '42px'
        };

        inputStyle = {
            height: '0px'
        }
    }

    if (type === 'password') {
        type = isVisible ? 'text' : 'password';
        addonAfter = <Icon name={isVisible ? 'icons/eye' : 'icons/eye-closed'} size={24} style={{ cursor: 'pointer' }} onClick={() => setVisible(isVisible => !isVisible)} />;
    }

    const inputId = useId();
    return (
        <HStack className={[styles.input, disabled && styles.disabled, className].filter(Boolean).join(' ')} {...props}>
            {addonBefore}
            <VStack style={{ flex: '1 1 0px' }}>
                <label htmlFor={inputId} style={labelStyle}>{label}</label>
                <input id={inputId} style={inputStyle} type={type} value={value} disabled={disabled} onBlur={handleBlur} onChange={handleChange} onFocus={handleFocus} />
            </VStack>
            {addonAfter}
        </HStack>
    );
};

export default Input;
