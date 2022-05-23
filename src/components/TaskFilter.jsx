import React from 'react';
import {useState} from 'react';
import {events} from "../store/store";
import Dropdown from "./Dropdown/Dropdown";

const TaskFilter = ({users}) => {

    const type = [{value: 'task', name: 'Задача'}, {value: 'bug', name: 'Ошибка'}]
    const rank = [{value: 'low', name: 'Низкий'}, {value: 'medium', name: 'Средний'}, {value: 'high', name: 'Высокий'}]
    const status = [{value: 'opened', name: 'Открыто'}, {value: 'inProgress', name: 'В работе'}, {value: 'testing', name: 'Тестирование'}, {value: 'complete', name: 'Сделано'}]
    const typeTitle = {defaultName: 'Тип', name: 'type', className: 'board-filter__type board-filter__item'}
    const rankTitle = {defaultName: 'Приоритет', name: 'rank', className: 'board-filter__priority board-filter__item'}
    const userTitle = {defaultName: 'Пользователь', name: 'assignedUsers', className: 'board-filter__user board-filter__item'}
    const statusTitle = {defaultName: 'Статус', name: 'status', className: 'board-filter__status board-filter__item'}

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
            <Dropdown change={handleFieldChange} form={form} values={type} title={typeTitle}/>
            <fieldset className="board-filter__query board-filter__item">
                <input className="board-filter__query-input" type="text" value={form.query} name="query" onChange={handleFieldChange}/>
            </fieldset>
            <Dropdown change={handleFieldChange} form={form} values={users}  title={userTitle}/>
            <Dropdown change={handleFieldChange} form={form} values={status} title={statusTitle}/>
            <Dropdown change={handleFieldChange} form={form} values={rank} title={rankTitle}/>
            <button type="submit" className="board-filter__btn button button--primary">Применить</button>
        </form>
    );
};

export default TaskFilter;