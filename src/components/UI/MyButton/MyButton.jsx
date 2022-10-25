import React from 'react';
import './MyButton.scss'

const MyButton = ({children, className, onClick, value}) => {
    return (
        <button onClick={onClick} className={`button ${className}`} value={value}>
            {children}
        </button>
    );
};

export default MyButton;