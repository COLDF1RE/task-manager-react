import React from 'react';

const BoardHeader = () => {
    return (
        <div className="board-header">
            <h1 className="board-header__title">Задачи</h1>
            <div className="board-header__options">
                <button className="board-header__options-btn">Кнопка 1</button>
                <button className="board-header__options-btn">Кнопка 2</button>
                <button className="board-header__options-btn">Кнопка 3</button>
            </div>
        </div>
    );
};

export default BoardHeader;