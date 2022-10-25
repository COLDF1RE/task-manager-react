import React from 'react';
import './BoardHeader.scss'

const BoardHeader = ({title, buttons}) => {
    return (
        <section className="board-header">
            <div className="board-header__info">
                {title}
            </div>
            <div className="board-header__options">
                {buttons}
            </div>
        </section>
    );
};

export default BoardHeader;