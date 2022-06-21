import React from 'react';
import './MyButton.scss'

const MyButton = ({children, className}) => {
    return (
        <button className={`button ${className}`}>
            {children}
        </button>
    );
};

export default MyButton;