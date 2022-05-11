import React, {useEffect, useState, useLayoutEffect} from 'react';
import BoardHeader from "../components/Board-header";
import Header from "../components/Header";
import TaskRead from "../components/TaskRead";
import TaskEdit from "../components/TaskEdit";
import TaskAdd from "../components/TaskAdd";
import {useLocation, useParams, useHistory} from "react-router-dom";
import {pages} from "../router/pages";
import TaskList from "../components/TaskList";
import {Link} from "react-router-dom";
import {observer} from 'mobx-react';
import {events} from "../store/store";


const Tasks = observer(() => {

    const {id} = useParams() || false
    const {pathname} = useLocation()
    const history = useHistory();

    function historyBack() {
        history.goBack()
    }

    const users = events.users || []
    const tasks = events.tasks.data || []
    const currentTask = tasks.find(task => task.id === id) || [];

    // console.log('id: ', id)
    // console.log('pathname: ', pathname)
    //
    // console.log('tasks: ', tasks)
    // console.log('currentTask: ', currentTask)
    //
    // console.log('users:', users)
    // console.log('currentUser: ', currentUser)

    return (
        <>
            <Header/>

            {/*//////////// TASKS ////////////*/}
            {/*<BoardHeader/>*/}
            {pathname === pages.tasks &&
            <>
                <div className="board-header">
                    <div className="board-header__info">
                        <h1 className="board-header__info-title">Задачи</h1>
                    </div>
                    <div className="board-header__options">
                        <Link to={pages.taskAdd} className="board-header__options-btn button button--primary">Добавить
                            задачу</Link>
                    </div>
                </div>
                <div className="board">
                    <TaskList tasks={tasks} users={users}/>
                </div>
            </>
            }

            {/*//////////// TASK READ ////////////*/}
            {id && id === currentTask.id &&
            <>
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
                <div className="board">
                    <TaskRead tasks={tasks} currentTask={currentTask} users={users}/>
                </div>
            </>
            }

            {/*//////// TASKS ADD ////////////*/}
            {pathname === pages.taskAdd &&
            <>
                <div className="board-header">
                    <div className="board-header__info">
                        <h1 className="board-header__info-title">Создание</h1>
                    </div>
                    <div className="board-header__options">
                        <button form="add-edit-task" className="board-header__options-btn button button--primary">Сохранить</button>
                        <button onClick={historyBack}
                                className="board-header__options-btn button button--default">Отмена
                        </button>
                    </div>
                </div>
                <div className="board">
                    <TaskAdd users={users}/>
                </div>
            </>
            }

            {/*//////// TASKS EDIT ////////////*/}
            {pathname === pages.taskEdit &&
            <>
                <div className="board-header">
                    <div className="board-header__info">
                        <h1 className="board-header__info-title">Редактирование</h1>
                    </div>
                    <div className="board-header__options">
                        <button className="board-header__options-btn button button--primary">Сохранить</button>
                        <button onClick={historyBack}
                                className="board-header__options-btn button button--default">Отмена
                        </button>
                    </div>
                </div>
                <div className="board">
                    <TaskEdit tasks={tasks}/>
                </div>
            </>
            }
        </>

    );
});

export default Tasks;