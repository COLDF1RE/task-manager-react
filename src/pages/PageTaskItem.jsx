import React from 'react';
import Header from "../components/Header";
import BoardHeader from "../components/Board-header";
import Board from "../components/Board";


const PageTaskItem = ({tasks}) => {
    return (
        <div>
            <Header/>
            <BoardHeader/>
            <Board tasks={tasks}/>
        </div>
    );
};

export default PageTaskItem;