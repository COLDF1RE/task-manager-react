import React from 'react';
import TaskAdd from "./TaskForm";
import Header from "./Header";
import {events} from "../store/store";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {observer} from "mobx-react";
import TaskForm from "./TaskForm";

// const Tasks = observer(() => {
const TaskEvent = observer(() => {

    const tasks = events.tasks.data || []
    const users = events.users || []
    const history = useHistory();

    function historyBack() {
        history.goBack()
    }

    return (
        <>
            <Header tasksActive={true}/>
            <div className="board-header">
                <div className="board-header__info">
                    <h1 className="board-header__info-title">Редактирование</h1>
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
                <TaskForm users={users} tasks={tasks}/>
            </div>
        </>
    );
});

export default TaskEvent;