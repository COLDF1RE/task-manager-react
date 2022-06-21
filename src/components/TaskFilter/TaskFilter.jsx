import React from 'react';
import {useState} from 'react';
import {events} from "../../store/store";
import Dropdown from "../UI/Dropdown";
import './TaskFilter.scss'

const TaskFilter = ({users}) => {

    const type = [{value: 'task', name: 'Задача'}, {value: 'bug', name: 'Ошибка'}]
    const rank = [{value: 'low', name: 'Низкий'}, {value: 'medium', name: 'Средний'}, {value: 'high', name: 'Высокий'}]
    const status = [{value: 'opened', name: 'Открыто'}, {value: 'inProgress', name: 'В работе'}, {value: 'testing', name: 'Тестирование'}, {value: 'complete', name: 'Сделано'}]
    const typeTitle = {defaultName: 'Тип', name: 'type'}
    const rankTitle = {defaultName: 'Приоритет', name: 'rank'}
    const userTitle = {defaultName: 'Пользователь', name: 'assignedUsers'}
    const statusTitle = {defaultName: 'Статус', name: 'status'}

    // const type = {
    //     task: 'Задача',
    //     bug: 'Ошибка'
    // }
    // const rank = {
    //     low: 'Низкий',
    //     medium: 'Средний',
    //     high: 'Высокий',
    // }
    // const status = {
    //     opened: 'Открыто',
    //     inProgress: 'В работе',
    //     testing: 'Тестирование',
    //     complete: 'Сделано',
    // }
    // const form = {
    //     query: '',
    //         assignedUsers: [],
    //         userIds: [],
    //         type: [],
    //         status: [],
    //         rank: []
    // },



    const [form, setForm] = useState({
        query: '',
        assignedUsers: [],
        userIds: [],
        type: [],
        status: [],
        rank: []
    })

    function handleFieldChange(evt) {
        const {name, value} = evt.target
        if (name === 'query') {
            setForm({...form, [name]: value})
        } else if (form[name].indexOf(value) === -1) {
            setForm({...form, [name]: [...form[name], value]})
        } else {
            setForm({...form, [name]: form[name].filter((i) => i !== value)})
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        events.fetch(form)
    }

    return (
        <form className="board-filter" onSubmit={handleSubmit}>
            <Dropdown change={handleFieldChange} form={form} values={type} title={typeTitle} className={'board-filter__type board-filter__item'}/>

            <fieldset className="board-filter__query board-filter__item">
                <input className="board-filter__query-input" type="text" value={form.query} name="query" onChange={handleFieldChange} placeholder="Название задачи"/>
            </fieldset>
            <Dropdown change={handleFieldChange} form={form} values={users}  title={userTitle} className={'board-filter__user board-filter__item'}/>
            <Dropdown change={handleFieldChange} form={form} values={status} title={statusTitle} className={'board-filter__status board-filter__item'}/>
            <Dropdown change={handleFieldChange} form={form} values={rank} title={rankTitle} className={'board-filter__priority board-filter__item'}/>
            <button type="submit" className="board-filter__btn button button--primary">Применить</button>
        </form>
    );
};

export default TaskFilter;