import React from 'react';
import {useState} from 'react';
import {events} from "../../store/store";
import Dropdown from "../UI/Dropdown/Dropdown";
import './TaskFilter.scss'
import Dropdown2 from "../UI/Dropdown2/Dropdown2";
import Checkbox from "../UI/Checkbox/Checkbox";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

const TaskFilter = ({users}) => {

    // const type = [{value: 'task', name: 'Задача'}, {value: 'bug', name: 'Ошибка'}]
    // const rank = [{value: 'low', name: 'Низкий'}, {value: 'medium', name: 'Средний'}, {value: 'high', name: 'Высокий'}]
    // const status = [{value: 'opened', name: 'Открыто'}, {value: 'inProgress', name: 'В работе'}, {value: 'testing', name: 'Тестирование'}, {value: 'complete', name: 'Сделано'}]
    // const typeTitle = {defaultName: 'Тип', name: 'type'}
    // const rankTitle = {defaultName: 'Приоритет', name: 'rank'}
    // const userTitle = {defaultName: 'Пользователь', name: 'assignedUsers'}
    // const statusTitle = {defaultName: 'Статус', name: 'status'}
    const type = {
        task: 'Задача',
        bug: 'Ошибка'
    }
    const rank = {
        low: 'Низкий',
        medium: 'Средний',
        high: 'Высокий',
    }
    const status = {
        opened: 'Открыто',
        inProgress: 'В работе',
        testing: 'Тестирование',
        complete: 'Сделано',
    }

    const [form, setForm] = useState({
        query: '',
        assignedUsers: [],
        userIds: [],
        type: [],
        status: [],
        rank: []
    })
    console.log(form)

    function getDropdownTitle (arr, defaultTitle, constsObj) {
        if (arr.length === 0) {
            return defaultTitle
        } else if (arr.length === 1){
            return constsObj[arr]
        } else {
            return `Выбрано: ${arr.length}`
        }
    }

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

            <Dropdown2
                className={'board-filter__type board-filter__item'}
                title={
                    getDropdownTitle(form.type, 'Тип', type)
                }
                body={
                    Object.entries(type).map(([key, value]) =>
                        <Checkbox
                            key={key}
                            value={key}
                            title={value}
                            checkedItems={form.type}
                            onChange={handleFieldChange}
                            name="type"
                        />
                    )
                }
            />

            <MyInput
                placeholder="Название задачи"
                className="board-filter__query board-filter__item"
                value={form.query}
                name="query"
                onChange={handleFieldChange}
            />

            <Dropdown2
                className={'board-filter__user board-filter__item'}
                title={
                    getDropdownTitle('', 'Пользователь', '')
                }
                body={
                    users.map(user =>
                        <Checkbox
                            key={user.id}
                            value={user.id}
                            title={user.username}
                            checkedItems={form.assignedUsers}
                            onChange={handleFieldChange}
                            name="assignedUsers"
                        />
                    )
                }
            />

            <Dropdown2
                className={'board-filter__status board-filter__item'}
                title={
                    getDropdownTitle(form.status, 'Статус', status)
                }
                body={
                    Object.entries(status).map(([key, value]) =>
                        <Checkbox
                            key={key}
                            value={key}
                            title={value}
                            checkedItems={form.status}
                            onChange={handleFieldChange}
                            name="status"
                        />
                    )
                }
            />

            <Dropdown2
                className={'board-filter__priority board-filter__item'}
                title={
                    getDropdownTitle(form.rank, 'Приоритет', rank)
                }
                body={
                    Object.entries(rank).map(([key, value]) =>
                        <Checkbox
                            key={key}
                            value={key}
                            title={value}
                            checkedItems={form.rank}
                            onChange={handleFieldChange}
                            name="rank"
                        />
                    )
                }
            />
            <MyButton type="submit" className="button--primary">Применить</MyButton>


            {/*<Dropdown change={handleFieldChange} form={form} values={type} title={typeTitle} className={'board-filter__type board-filter__item'}/>*/}
            {/*<fieldset className="board-filter__query board-filter__item">*/}
            {/*    <input className="board-filter__query-input" type="text" value={form.query} name="query" onChange={handleFieldChange} placeholder="Название задачи"/>*/}
            {/*</fieldset>*/}
            {/*<Dropdown change={handleFieldChange} form={form} values={users}  title={userTitle} className={'board-filter__user board-filter__item'}/>*/}
            {/*<Dropdown change={handleFieldChange} form={form} values={status} title={statusTitle} className={'board-filter__status board-filter__item'}/>*/}
            {/*<Dropdown change={handleFieldChange} form={form} values={rank} title={rankTitle} className={'board-filter__priority board-filter__item'}/>*/}
            {/*<button type="submit" className="board-filter__btn button button--primary">Применить</button>*/}
        </form>
    );
};

export default TaskFilter;