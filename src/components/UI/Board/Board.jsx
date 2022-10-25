import React from 'react';
import './Board.scss'

const Board = ({children}) => {
    return (
        <section className="board">
            {children}
        </section>
    );
};

export default Board;