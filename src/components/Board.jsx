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
        {id: 1, username: '1 Евгений Онегин'},
        {id: 2, username: '2 Евгений Онегин'},
        {id: 3, username: '3 Евгений Онегин'},
        {id: 4, username: '4 Евгений Онегин'},
        {id: 5, username: '5 Евгений Онегин'},
        {id: 6, username: '6 Евгений Онегин'},
        {id: 7, username: '7 Евгений Онегин'},
        {id: 8, username: '8 Евгений Онегин'},
        {id: 9, username: '9 Евгений Онегин'},
        {id: 10, username: '10 Евгений Онегин'},
        {id: 11, username: '11 Евгений Онегин'},
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
            {/*{pathname === pages.tasks &&*/}
            {/*<>*/}
            {/*    <TaskFilter/>*/}
            {/*    <div className="tasks-wrapper">*/}
            {/*        {tasks.length !== 0*/}
            {/*            ? tasks.slice(firstContentIndex, lastContentIndex).map(task => <Task task={task}*/}
            {/*                                                                                 key={task.id}/>)*/}
            {/*            : <NoTasks/>*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*    <Pagination*/}
            {/*        nextPage={nextPage}*/}
            {/*        prevPage={prevPage}*/}
            {/*        tasksLength={tasks.length}*/}
            {/*        firstContentIndex={firstContentIndex}*/}
            {/*        lastContentIndex={lastContentIndex}*/}
            {/*        totalPages={totalPages}*/}
            {/*        page={page}*/}
            {/*        setPage={setPage}*/}
            {/*    />*/}
            {/*</>*/}
            {/*}*/}

            {/* Открытая задача по id  /tasks/:id */}
            {/*{pathname === pages.taskId &&*/}
            {/*{id &&*/}
            {/*<TaskRead tasks={tasks}/>*/}
            {/*}*/}

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
                        ? users.slice(firstContentIndex, lastContentIndex).map(user => <User user={user} key={user.id}/>)

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