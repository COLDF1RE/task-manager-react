import React from 'react';
import TaskFilter from "./TaskFilter";
import Task from "./Task";
import NoTasks from "./NoTasks";
import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";

const TaskList = ({tasks}) => {

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 8,
        count: tasks.length,
    });

    return (
        <>
            <TaskFilter/>
            <div className="tasks-wrapper">
                {/*///////////////////*/}
                {tasks.length !== 0
                    ? tasks.slice(firstContentIndex, lastContentIndex).map(task => <Task task={task} key={task.id}/>)
                    : <NoTasks/>
                }
            </div>
            <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                tasksLength={tasks.length}
                firstContentIndex={firstContentIndex}
                lastContentIndex={lastContentIndex}
                totalPages={totalPages}
                page={page}
                setPage={setPage}
            />
        </>
    );
};

export default TaskList;