import React from 'react';

const BoardHeader = ({children}) => {
    return (
        <div className="board-header">
            <div className="board-header__info">
                {children}
            </div>
        </div>
    );
};

export default BoardHeader;