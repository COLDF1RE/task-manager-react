import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import TaskRead from "../components/TaskRead";
import TaskForm from "../components/TaskForm";
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
    const users = events.users || []
    const tasks = events.tasks?.data || []
    const currentTask = tasks.find(task => task.id === id) || [];

    const opened = [{value: 'inProgress', name: 'Взять в работу'}, {value: 'complete', name: 'Отметить как выполненное'}]
    const inProgress = [{value: 'opened', name: 'Заново открыть'}, {value: 'testing', name: 'Взять на тестирование'}, {value: 'complete', name: 'Отметить как выполненное'}]
    const testing = [{value: 'opened', name: 'Заново открыть'}, {value: 'complete', name: 'Отметить как выполненное'}]
    const complete = [{value: 'opened', name: 'Заново открыть'}]

    useEffect(()=>{
        events.fetch()
    }, [])

    function historyBack() {
        history.goBack()
    }

    function deleteTask() {
        events.deleteTask(id)
        historyBack()
    }
    
    function changeStatusTask(evt) {
        const status = evt.target.value
        events.changeStatusTask(id, status)
        console.log(id, status)
    }

    return (
        <>
            <Header tasksActive={true}/>

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
                        <h1 className="board-header__info-title">{currentTask.title}
                            {currentTask.status === 'opened' && <span className="board-header__info-status status status--default">Открыто</span>}
                            {currentTask.status === 'inProgress' && <span className="board-header__info-status status status--yellow">В Работе</span>}
                            {currentTask.status === 'testing' && <span className="board-header__info-status status status--yellow">Тестирование</span>}
                            {currentTask.status === 'complete' && <span className="board-header__info-status status status--green">Сделано</span>}
                        </h1>
                    </div>
                    <div className="board-header__options">
                        {currentTask.status === 'opened' && opened.map(item =>
                            <button key={item.value} onClick={changeStatusTask} value={item.value} className="board-header__options-btn button button--default">{item.name}</button>
                        )}
                        {currentTask.status === 'inProgress' && inProgress.map(item =>
                            <button key={item.value} onClick={changeStatusTask} value={item.value} className="board-header__options-btn button button--default">{item.name}</button>
                        )}
                        {currentTask.status === 'testing' && testing.map(item =>
                            <button key={item.value} onClick={changeStatusTask} value={item.value} className="board-header__options-btn button button--default">{item.name}</button>
                        )}
                        {currentTask.status === 'complete' && complete.map(item =>
                            <button key={item.value} onClick={changeStatusTask} value={item.value} className="board-header__options-btn button button--default">{item.name}</button>
                        )}
                        {currentTask.userId === localStorage.getItem('userId') &&
                            <>
                                <Link to={`/tasks/edit/${id}`} className="board-header__options-btn button button--primary">Редактировать</Link>
                                <button onClick={deleteTask} className="board-header__options-btn button button--error">Удалить</button>
                            </>
                        }
                    </div>
                </div>
                <div className="board">
                    <TaskRead tasks={tasks} currentTask={currentTask} users={users}/>
                </div>
                <footer className="footer"></footer>
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
                        <button form="add-edit-task"
                                className="board-header__options-btn button button--primary">Сохранить
                        </button>
                        <button onClick={historyBack}
                                className="board-header__options-btn button button--default">Отмена
                        </button>
                    </div>
                </div>
                <div className="board">
                    <TaskForm users={users}/>
                </div>
            </>
            }
        </>

    );
});

export default Tasks;