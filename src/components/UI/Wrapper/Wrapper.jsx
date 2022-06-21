import React from 'react';
import './Wrapper.scss'

const Wrapper = ({children}) => {
    return (
        <div className="tasks-wrapper">
            {children}
        </div>
    );
};

export default Wrapper;