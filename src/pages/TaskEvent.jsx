import React from 'react';
import Header from "../components/Header";
import {events} from "../store/store";
import {useHistory, useParams} from "react-router-dom";
import {observer} from "mobx-react";
import BoardTaskForm from "../components/BoardTaskForm";
import Footer from "../components/Footer";


const TaskEvent = observer(() => {

    const {id} = useParams() || false

    const tasks = events.tasks.data || []
    const users = events.users || []
    const history = useHistory();

    function historyBack() {
        history.goBack()
    }

    return (
        <div className="wrapper">
            <Header tasksActive={true}/>

            <div className="main">
                <section className="board-header">
                    <div className="board-header__info">
                        <h1 className="board-header__info-title">{id ? 'Редактирование' : 'Создание'}</h1>
                    </div>
                    <div className="board-header__options">
                        <button form="add-edit-task" className="board-header__options-btn button button--primary">Сохранить</button>
                        <button onClick={historyBack} className="board-header__options-btn button button--default">Отмена</button>
                    </div>
                </section>

                <section className="board">
                    <BoardTaskForm users={users} tasks={tasks}/>
                </section>
            </div>

            <Footer/>
        </div>
    );
});

export default TaskEvent;