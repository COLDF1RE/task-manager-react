import React from 'react';
import BoardHeader from "../components/Board-header";
import Board from "../components/Board";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Tasks = ({tasks}) => {
    return (
        <>
            <Header/>
            <BoardHeader/>
            <Board tasks={tasks}/>

        </>
    );
};

export default Tasks;