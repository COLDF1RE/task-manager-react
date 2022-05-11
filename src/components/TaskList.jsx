import React, {useState} from 'react';
import TaskFilter from "./TaskFilter";
import Task from "./Task";
import NoTasks from "./NoTasks";
import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";
import {events} from "../store/store";

const TaskList = ({tasks, users}) => {

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 10,
        count: tasks ? tasks.length : '',
        // count: events ? events.data.total : '',
    });


    function getUserName(taskUserId) {
        let username = users.find(user => user.id === taskUserId)
        return username
    }

    return (
        <>
            <TaskFilter/>
            <div className="tasks-wrapper">
                {tasks.length !== 0
                    ? tasks.slice(firstContentIndex, lastContentIndex)
                        .map(task =>
                            <Task task={task} key={task.id}
                                  username={getUserName(task.userId) !== undefined ? getUserName(task.userId).username : getUserName(task.userId)} />
                        )
                    : <NoTasks/>
                }

            </div>
            <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                tasksLength={tasks.length}
                // tasksLength={events.data.total}
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