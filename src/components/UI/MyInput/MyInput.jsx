import React from 'react';
import './MyInput.scss'

const MyInput = ({value, change, name, placeholder}) => {
    return (
        <input
            className="input"
            type="text"
            value={value}
            onChange={change}
            placeholder={placeholder}
            name={name}
        />
    );
};

export default MyInput;