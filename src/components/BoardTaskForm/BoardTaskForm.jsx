import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {events} from "../../store/store";
import Dropdown from "../UI/Dropdown/Dropdown";
import Dropdown2 from "../UI/Dropdown2/Dropdown2";
import Checkbox from "../UI/Checkbox/Checkbox";
import MyInput from "../UI/MyInput/MyInput";
import MyTextarea from "../UI/MyTextarea/MyTextarea";
import './BoardTaskForm.scss'

const BoardTaskForm = ({users, tasks}) => {

    const {id} = useParams() || false
    const currentTask = id !== 'add' ? tasks.find(task => task.id === id) : '';

    // const type = [{value: 'task', name: 'Задача'}, {value: 'bug', name: 'Ошибка'}]
    // const rank = [{value: 'low', name: 'Низкий'}, {value: 'medium', name: 'Средний'}, {value: 'high', name: 'Высокий'}]
    // const typeTitle = {defaultName: 'Выбрать', name: 'type'}
    // const rankTitle = {defaultName: 'Выбрать', name: 'rank'}
    // const userTitle = {defaultName: 'Выбрать', name: 'assignedId'}

    const type = {
        task: 'Задача',
        bug: 'Ошибка'
    }
    const rank = {
        low: 'Низкий',
        medium: 'Средний',
        high: 'Высокий',
    }

    function getDropdownTitle (arr, defaultTitle, constsObj) {
        if (arr.length === 0) {
            return defaultTitle
        } else {
            return constsObj[arr]
        }
    }

    const [ form, setForm ] = useState({
        userId: localStorage.getItem('userId'),
        assignedId: "",
        title: "",
        description: "",
        type: "",
        rank: "",
    })
    console.log(form)

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
    }

    const history = useHistory();
    function historyBack() {
        history.goBack()
    }

    function getUserName() {
        let username = users.find(user => user.id === form.assignedId)
        return username
    }

    return (
        <>
            <form id="add-edit-task" className="task-edit" onSubmit={handleSubmit}>

                <fieldset className="task-edit__info">
                    <label htmlFor="assignedId" className="task-edit__info-title">Исполнитель</label>
                    {/*<Dropdown change={handleFieldChange} form={form} values={users} title={userTitle} clickInsideCloseMenu={false} inputType={'radio'} className={'task-edit__info-select z-index3'}/>*/}
                    <Dropdown2
                        className={'task-edit__info-select z-index3'}
                        title={
                            getUserName() !== undefined ? getUserName().username : ''
                        }
                        body={
                            users.map(user =>
                                <Checkbox
                                    key={user.id}
                                    value={user.id}
                                    title={user.username}
                                    inputType="radio"
                                    checkedItems={form.assignedId}
                                    onChange={handleFieldChange}
                                    name="assignedId"
                                />
                            )
                        }
                    />

                    <label htmlFor="type" className="task-edit__info-title">Тип запроса</label>
                    {/*<Dropdown change={handleFieldChange} form={form} values={type} title={typeTitle} clickInsideCloseMenu={false} inputType={'radio'} className={'task-edit__info-select z-index2'}/>*/}
                    <Dropdown2
                        className={'task-edit__info-select z-index2'}
                        title={
                            getDropdownTitle(form.type, '', type)
                        }
                        body={
                            Object.entries(type).map(([key, value]) =>
                                <Checkbox
                                    key={key}
                                    value={key}
                                    title={value}
                                    inputType="radio"
                                    checkedItems={form.type}
                                    onChange={handleFieldChange}
                                    name="type"
                                />
                            )
                        }
                    />

                    <label htmlFor="rank" className="task-edit__info-title">Приоритет</label>
                    {/*<Dropdown change={handleFieldChange} form={form} values={rank} title={rankTitle} clickInsideCloseMenu={false} inputType={'radio'} className={'task-edit__info-select z-index1'}/>*/}
                    <Dropdown2
                        className="task-edit__info-select z-index1"
                        title={
                            getDropdownTitle(form.rank, '', rank)
                        }
                        body={
                            Object.entries(rank).map(([key, value]) =>
                                <Checkbox
                                    key={key}
                                    value={key}
                                    title={value}
                                    inputType="radio"
                                    checkedItems={form.rank}
                                    onChange={handleFieldChange}
                                    name="rank"
                                />
                            )
                        }
                    />

                </fieldset>

                <fieldset className="task-edit__description">
                    <label htmlFor="title" className="task-edit__description-title">Название</label>
                    <MyInput
                        className="task-edit__description-input"
                        type="text"
                        onChange={handleFieldChange}
                        name="title"
                        value={form.title}
                    />
                    <label htmlFor="description" className="task-edit__description-title">Описание</label>
                    <MyTextarea
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

export default BoardTaskForm;