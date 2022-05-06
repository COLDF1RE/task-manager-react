import React, {useEffect, useState} from 'react';
import BoardHeader from "../components/Board-header";
import Header from "../components/Header";
import TaskRead from "../components/TaskRead";
import TaskEdit from "../components/TaskEdit";
import {useLocation, useParams, useHistory} from "react-router-dom";
import {pages} from "../router/pages";
import TaskList from "../components/TaskList";
import Modal from "../components/Modal";
import {Link} from "react-router-dom";
import {getFilteredTasks} from "../API/api";
import {logDOM} from "@testing-library/react";

const Tasks = ({tasks}) => {
// const Tasks = () => {

    const {id} = useParams() || false
    const {pathname} = useLocation()


    const [taskss, setTaskss] = useState(12)


/////////////// FETCH ////////////////////////////////

    // const url = 'http://93.95.97.34/api'
    const filteredData = {
        "filter": {
            "query": "",
            "assignedUsers": [
                // "string"
            ],
            "userIds": [
                // "string"
            ],
            "type": [
                // "task"
            ],
            "status": [
                // "opened"
            ],
            "rank": [
                // "low"
            ]
        },
        "page": 0,
        "limit": 0
    }


////////////////////////////////////////////


    const url = 'http://93.95.97.34/api'

    const request = async (url, method = 'GET', body) => {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        });
        return await response.json();
    }

// ПОЛУЧЕНИЕ СПИСКА ЗАДАЧ
    const getFilteredTasks = (data) => {
        const filteredData = {
            "filter": {
                "query": "",
                "assignedUsers": [
                    // "string"
                ],
                "userIds": [
                    // "string"
                ],
                "type": [
                    // "task"
                ],
                "status": [
                    // "opened"
                ],
                "rank": [
                    // "low"
                ]
            },
            "page": 0,
            "limit": 0
        }
        return request(url + '/tasks', 'POST', filteredData)
    }

    useEffect(()=>{
        getFilteredTasks()
    },[])


////////////////////////////////////////////


    const currentTask = tasks.find(task => task.id === id) || false
    console.log('currentTask:', currentTask)

    let history = useHistory();

    function historyBack() {
        history.goBack()
    }


    return (
        <>
            <Header/>
            <button className="">testtesetestet {taskss}</button>

            {/*<BoardHeader/>*/}
            {/*//////////// ШАПКА ЗАДАЧИ ////////////*/}
            {pathname === pages.tasks &&
            <div className="board-header">
                <div className="board-header__info">
                    <h1 className="board-header__info-title">Задачи</h1>
                </div>
                <div className="board-header__options">
                    <Link to={pages.taskAdd} className="board-header__options-btn button button--primary">Добавить
                        задачу</Link>
                </div>
            </div>
            }

            {/*//////////// ШАПКА СМОТРЕТЬ ЗАДАЧУ ////////////*/}
            {id && id === currentTask.id &&
            <div className="board-header">
                <div className="board-header__info">
                    <h1 className="board-header__info-title">{currentTask.title}</h1>
                    <div className="board-header__info-status status status--default">{currentTask.status}</div>
                </div>
                <div className="board-header__options">
                    <button className="board-header__options-btn button button--default">Взять в работу</button>
                    <Link to={pages.taskAdd}
                          className="board-header__options-btn button button--primary">Редактировать</Link>
                    <button className="board-header__options-btn button button--error">Удалить</button>
                </div>
            </div>
            }


            {/*//////// ШАПКА ДОБАВИТЬ / РЕДАКТИРОВАТЬ ЗАДАЧУ ////////////*/}
            {pathname === pages.taskAdd &&
            <div className="board-header">
                <div className="board-header__info">
                    <h1 className="board-header__info-title">Редактирование / Создание</h1>
                </div>
                <div className="board-header__options">
                    <button className="board-header__options-btn button button--primary">Сохранить</button>
                    <button onClick={historyBack} className="board-header__options-btn button button--default">Отмена
                    </button>
                </div>
            </div>
            }
            {pathname === pages.taskEdit &&
            <div className="board-header">
                <div className="board-header__info">
                    <h1 className="board-header__info-title">Редактирование / Создание</h1>
                </div>
                <div className="board-header__options">
                    <button className="board-header__options-btn button button--primary">Сохранить</button>
                    <button onClick={historyBack} className="board-header__options-btn button button--default">Отмена
                    </button>
                </div>
            </div>
            }


            <div className="board">
                {/*///////////////// ТЕЛО ЗАДАЧИ ////////////////////*/}
                {pathname === pages.tasks && <TaskList tasks={tasks}/>}

                {/*///////////////// ТЕЛО СМОТРЕТЬ ЗАДАЧУ ////////////////////*/}
                {id && id === currentTask.id && <TaskRead tasks={tasks}/>}

                {/*///////////////// ТЕЛО ДОБАВИТЬ / РЕДАКТИРОВАТЬ ЗАДАЧУ ////////////////////*/}
                {pathname === pages.taskAdd && <TaskEdit tasks={tasks}/>}
            </div>
        </>
    );
};

export default Tasks;