import React from 'react';
import './MyTextarea.scss'

const MyTextarea = ({value, onChange, name, placeholder, className}) => {
    return (
        <textarea
            className={`textarea ${className}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
        />
    );
};

export default MyTextarea;