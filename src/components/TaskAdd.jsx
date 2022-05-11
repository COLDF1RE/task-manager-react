import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const TaskEdit = ({users}) => {

    const [ form, setForm ] = useState({
        id: "",
        userId: "6273dcf6d09b551dca8762a0",
        assignedId: "",
        title: "",
        description: "",
        type: "",
        dateOfCreation: "",
        dateOfUpdate: "",
        timeInMinutes: 0,
        status: "",
        rank: ""
    })

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
        console.log('form add/edit task: ',form)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // if (id) {
        //     events.editTask({
        //         id: event._id,
        //         favorite: event.favorite,
        //         archive: event.archive,
        //         ...form
        //     })
        //     historyBack()
        // } else {
        //     events.addTask(form)
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
                        className="task-edit__info-select">
                        onChange={handleFieldChange}
                        name="assignedId"
                        required

                        {users.map(user =>
                            <option value={user.id} key={user.id} className="">{user.username}</option>
                        )}
                    </select>

                    <label htmlFor="type" className="task-edit__info-title">Тип запроса</label>
                    <select
                        className="task-edit__info-select">
                        onChange={handleFieldChange}
                        name="type"
                        required
                        value={form.type}

                        <option
                            className=""
                            value={form.type}
                            // value="task"
                            onChange={handleFieldChange}
                            name="type"
                        >
                            Задача
                        </option>

                        <option
                            className=""
                            // value={form.type}
                            // value="error"
                            onChange={handleFieldChange}
                            name="type"
                        >
                            Ошибка
                        </option>

                    </select>

                    <label htmlFor="rank" className="task-edit__info-title">Приоритет</label>
                    <select
                        className="task-edit__info-select">
                        onChange={handleFieldChange}
                        name="rank"
                        required

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
                        // type="text"
                        onChange={handleFieldChange}
                        name="description"
                        value={form.description}
                    >
                    </textarea>
                </fieldset>

            </form>
        </>
    );
};

export default TaskEdit;