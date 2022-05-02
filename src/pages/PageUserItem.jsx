import React from 'react';
import Header from "../components/Header";
import BoardHeader from "../components/Board-header";
import Board from "../components/Board";

const PageUserItem = ({tasks}) => {
    return (
        <>
            <Header/>
            <BoardHeader/>
            <Board tasks={tasks}/>
        </>
    );
};

export default PageUserItem;