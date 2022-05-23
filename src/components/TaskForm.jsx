import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {events} from "../store/store";
import Dropdown from "./Dropdown/Dropdown";

const TaskForm = ({users, tasks}) => {

    const {id} = useParams() || false
    const currentTask = id !== 'add' ? tasks.find(task => task.id === id) : '';

    const type = [{value: 'task', name: 'Задача'}, {value: 'bug', name: 'Ошибка'}]
    const rank = [{value: 'low', name: 'Низкий'}, {value: 'medium', name: 'Средний'}, {value: 'high', name: 'Высокий'}]
    const typeTitle = {defaultName: 'Выбрать', name: 'type', className: 'task-edit__info-select z-index2'}
    const rankTitle = {defaultName: 'Выбрать', name: 'rank', className: 'task-edit__info-select z-index1'}
    const userTitle = {defaultName: 'Выбрать', name: 'assignedId', className: 'task-edit__info-select z-index3'}

    const [ form, setForm ] = useState({
        userId: localStorage.getItem('userId'),
        assignedId: "",
        title: "",
        description: "",
        type: "",
        rank: "",
    })

    useEffect(()=> {
        if (currentTask) {
            setForm({
                id: currentTask.id,
                userId: localStorage.getItem('userId'),
                assignedId: currentTask.assignedId,
                title: currentTask.title,
                description: currentTask.description,
                type: currentTask.type,
                dateOfCreation: currentTask.dateOfCreation,
                dateOfUpdate: currentTask.dateOfUpdate,
                timeInMinutes: currentTask.timeInMinutes,
                status: currentTask.status,
                rank: currentTask.rank,
            })
        }
    }, [events.tasks])

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        events.createOrEditTask(form)
        historyBack()
        // if (id) {
        //     events.createOrEditTask({
        //         ...form
        //     })
        //     historyBack()
        // } else {
        //     events.createOrEditTask(form)
        //     historyBack()
        // }
        console.log('submit form add/edit task: ', form)
    }

    const history = useHistory();
    function historyBack() {
        history.goBack()
    }

    return (
        <>
            <form id="add-edit-task" className="task-edit" onSubmit={handleSubmit}>

                <fieldset className="task-edit__info">
                    <label htmlFor="assignedId" className="task-edit__info-title">Исполнитель</label>
                    <Dropdown change={handleFieldChange} form={form} values={users} title={userTitle} clickInsideCloseMenu={false} inputType={'radio'}/>

                    <label htmlFor="type" className="task-edit__info-title">Тип запроса</label>
                    <Dropdown change={handleFieldChange} form={form} values={type} title={typeTitle} clickInsideCloseMenu={false} inputType={'radio'}/>

                    <label htmlFor="rank" className="task-edit__info-title">Приоритет</label>
                    <Dropdown change={handleFieldChange} form={form} values={rank} title={rankTitle} clickInsideCloseMenu={false} inputType={'radio'}/>
                </fieldset>

                <fieldset className="task-edit__description">
                    <label htmlFor="title" className="task-edit__description-title">Название</label>
                    <input
                        className="task-edit__description-input"
                        type="text"
                        onChange={handleFieldChange}
                        name="title"
                        value={form.title}
                        required
                    />
                    <label htmlFor="description" className="task-edit__description-title">Описание</label>
                    <textarea
                        className="task-edit__description-textarea"
                        onChange={handleFieldChange}
                        name="description"
                        value={form.description}
                    />
                </fieldset>

            </form>
        </>
    );
};

export default TaskForm;