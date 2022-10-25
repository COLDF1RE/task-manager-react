import React from 'react';
import './MyInput.scss'

const MyInput = ({value, onChange, name, placeholder, className, type}) => {
    return (
        <input
            className={`input ${className}`}
            type={type || "text"}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
        />
    );
};

export default MyInput;