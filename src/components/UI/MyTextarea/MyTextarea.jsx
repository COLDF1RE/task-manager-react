import React from 'react';
import './MyTextarea.scss'

const MyTextarea = ({value, change, name, placeholder}) => {
    return (
        <textarea
            className="textarea"
            value={value}
            onChange={change}
            placeholder={placeholder}
            name={name}
        />
    );
};

export default MyTextarea;