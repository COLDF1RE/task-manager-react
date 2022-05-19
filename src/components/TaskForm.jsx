import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {events} from "../store/store";
import {createOrEditTask} from "../API/api";

const TaskAddOrEdit = ({users, tasks}) => {

    const {id} = useParams() || false
    const currentTask = id !== 'add' ? tasks.find(task => task.id === id) : '';

    const [ form, setForm ] = useState({
        userId: "6273dcf6d09b551dca8762a0",
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
                userId: "6273dcf6d09b551dca8762a0",
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



    // function clearForm() {
        // setForm({
        //     theme: '',
        //     comment: '',
        //     date: newDate
        // })
    // }

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target
        setForm({...form, [name]: value})

    }
    console.log('form add/edit task: ',form)

    const handleSubmit = (evt) => {
        evt.preventDefault()
        events.createOrEditTask(form)
        historyBack()
        // if (id) {
        //     events.createOrEditTask({
        //         id: event._id,
        //         favorite: event.favorite,
        //         archive: event.archive,
        //         ...form
        //     })
        //     historyBack()
        // } else {
        //     events.createOrEditTask(form)
        //     clearForm()
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
                    <select
                        className="task-edit__info-select"
                        onChange={handleFieldChange}
                        name="assignedId"
                        required
                    >
                        {users.map(user =>
                            <option value={user.id} key={user.id} className="">{user.username}</option>
                        )}
                    </select>

                    <label htmlFor="type" className="task-edit__info-title">Тип запроса</label>
                    <select
                        className="task-edit__info-select"
                        onChange={handleFieldChange}
                        name="type"
                        required
                        value={form.type}
                    >
                        <option value="task" className="">Задача</option>
                        <option value="bug" className="">Ошибка</option>
                    </select>

                    <label htmlFor="rank" className="task-edit__info-title">Приоритет</label>
                    <select
                        className="task-edit__info-select"
                        onChange={handleFieldChange}
                        name="rank"
                        required
                    >
                        <option value="low" className="">Низкий</option>
                        <option value="medium" className="">Средний</option>
                        <option value="high" className="">Высокий</option>
                    </select>
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

export default TaskAddOrEdit;