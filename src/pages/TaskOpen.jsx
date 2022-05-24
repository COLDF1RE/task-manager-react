import React, {useEffect} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import BoardTaskOpen from "../components/BoardTaskOpen";
import {events} from "../store/store";
import Header from "../components/Header";
import {observer} from "mobx-react";
import {pages} from "../router/pages";
import Footer from "../components/Footer";
import Error404 from "./Error404";

const TaskOpen = observer(() => {

    const {id} = useParams() || false
    console.log(id)

    const users = events.users || []
    const tasks = events.tasks?.data || []
    const currentTask = tasks.find(task => task.id === id) || [];
    const history = useHistory();

    const opened = [{value: 'inProgress', name: 'Взять в работу'}, {value: 'complete', name: 'Отметить как выполненное'}]
    const inProgress = [{value: 'opened', name: 'Заново открыть'}, {value: 'testing', name: 'Взять на тестирование'}, {value: 'complete', name: 'Отметить как выполненное'}]
    const testing = [{value: 'opened', name: 'Заново открыть'}, {value: 'complete', name: 'Отметить как выполненное'}]
    const complete = [{value: 'opened', name: 'Заново открыть'}]

    useEffect(()=>{
        events.fetch()
    }, [])

    function deleteTask() {
        events.deleteTask(id)
        historyBack()
    }

    function historyBack() {
        history.goBack()
    }

    function changeStatusTask(evt) {
        const status = evt.target.value
        events.changeStatusTask(id, status)
        console.log(id, status)
    }

    return (
        <>
        {id === currentTask.id ?
            <div className="wrapper">
                <Header tasksActive={true}/>
                <div className="main">
                    <section className="board-header">
                        <div className="board-header__info">
                            <h1 className="board-header__info-title">{currentTask.title}
                                {currentTask.status === 'opened' &&
                                <span className="board-header__info-status status status--default">Открыто</span>}
                                {currentTask.status === 'inProgress' &&
                                <span className="board-header__info-status status status--yellow">В Работе</span>}
                                {currentTask.status === 'testing' &&
                                <span className="board-header__info-status status status--yellow">Тестирование</span>}
                                {currentTask.status === 'complete' &&
                                <span className="board-header__info-status status status--green">Сделано</span>}
                            </h1>
                        </div>
                        <div className="board-header__options">
                            {currentTask.status === 'opened' && opened.map(item =>
                                <button key={item.value} onClick={changeStatusTask} value={item.value}
                                        className="board-header__options-btn button button--default">{item.name}</button>
                            )}
                            {currentTask.status === 'inProgress' && inProgress.map(item =>
                                <button key={item.value} onClick={changeStatusTask} value={item.value}
                                        className="board-header__options-btn button button--default">{item.name}</button>
                            )}
                            {currentTask.status === 'testing' && testing.map(item =>
                                <button key={item.value} onClick={changeStatusTask} value={item.value}
                                        className="board-header__options-btn button button--default">{item.name}</button>
                            )}
                            {currentTask.status === 'complete' && complete.map(item =>
                                <button key={item.value} onClick={changeStatusTask} value={item.value}
                                        className="board-header__options-btn button button--default">{item.name}</button>
                            )}
                            {currentTask.userId === localStorage.getItem('userId') &&
                            <>
                                <Link to={pages.taskAdd + id}
                                      className="board-header__options-btn button button--primary">Редактировать</Link>
                                <button onClick={deleteTask}
                                        className="board-header__options-btn button button--error">Удалить
                                </button>
                            </>
                            }
                        </div>
                    </section>

                    <section className="board">
                        <BoardTaskOpen tasks={tasks} currentTask={currentTask} users={users}/>
                    </section>
                </div>

                <Footer/>
            </div>
            :
            <Error404/>
        }
        </>
    );
});

export default TaskOpen;