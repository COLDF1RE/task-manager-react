import React, {useMemo, useState} from 'react';
import Pagination from "./Pagination";
import Task from "./Task";
import TaskFilter from "./TaskFilter";
import TaskEdit from "./TaskEdit";
import TaskRead from "./TaskRead";
import {useLocation, useParams} from "react-router-dom";
import {pages} from "../router/pages";
import NoTasks from "./NoTasks";
import usePagination from "../hooks/usePagination";
import User from "./User";

const Board = ({tasks}) => {

    /////////////////
    const users = [
        '1 Евгений Онегин',
        '2 Евгений Онегин',
        '3 Евгений Онегин',
        '4 Евгений Онегин',
        '6 Евгений Онегин',
        '7 Евгений Онегин',
        '8 Евгений Онегин',
        '9 Евгений Онегин',
        '10 Евгений Онегин',
        '11 Евгений Онегин',
        '12 Евгений Онегин',
    ]





    const {pathname} = useLocation()
    const {id} = useParams()
    console.log('pathname', pathname)
    console.log('id', id)


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
        count: tasks ? tasks.length : '',
        // count: users ? users.length : '',
    });


    return (
        <div className="board">

            {/* ЗАДАЧИ */}
            {/* Главная Список Задач  /tasks  */}
            {pathname === pages.tasks &&
            <>
                <TaskFilter/>
                <div className="tasks-wrapper">
                    {/*///////////////////*/}
                    {tasks.length !== 0
                        ? tasks.slice(firstContentIndex, lastContentIndex).map(task => <Task task={task}
                                                                                             key={task.id}/>)
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
            }

            {/* Открытая задача по id  /tasks/:id */}
            {/*{pathname === pages.taskId &&*/}
            {id &&
            <TaskRead tasks={tasks}/>
            }

            {/* Открытая задача по id Редактирование tasks/:id/edit */}
            {/*{pathname === pages.tasksEdit &&*/}
            {/*<TaskEdit/>*/}
            {/*}*/}

            {/* Открытая задача по id Создание Новой tasks/:id/add */}
            {/*{pathname === pages.tasksId &&*/}
            {/*<TaskEdit/>*/}
            {/*}*/}


            {/* ПОЛЬЗОВАТЕЛИ */}
            {/* Список Пользователей /users */}
            {pathname === pages.users &&
            <>
                <div className="tasks-wrapper">

                    {users.length !== 0
                        ////////нужен кей
                        ? users.slice(firstContentIndex, lastContentIndex).map(user => <User user={user}/>)

                        : <NoTasks/>
                    }

                </div>
                <Pagination
                    nextPage={nextPage}
                    prevPage={prevPage}
                    tasksLength={users.length}
                    firstContentIndex={firstContentIndex}
                    lastContentIndex={lastContentIndex}
                    totalPages={totalPages}
                    page={page}
                    setPage={setPage}
                />
            </>
            }

            {/* Открытый Пользователь /users/:id */}
            {/*{pathname === pages.users &&*/}
            {/*<TaskEdit/>*/}
            {/*}*/}

            {/* Список Пользователей /users/:id/edit  открывает модальное окно */}
            {/*{pathname === pages.users &&*/}
            {/*<TaskEdit/>*/}
            {/*}*/}


            {/*</div>*/}
            {/*</div>*/}
        </div>

    );
};

export default Board;