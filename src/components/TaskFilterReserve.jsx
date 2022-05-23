import React from 'react';
import {CustomSelect} from '../customSelect';
import {useState} from 'react';
import {getFilteredTasks} from "../API/api";
import {events} from "../store/store";
import Menu from "./Menu";
import {Link} from "react-router-dom";
import {pages} from "../router/pages";
import Dropdown from "./Dropdown/Dropdown";

const TaskFilter = ({users}) => {

    const [menuActive, setMenuActive] = useState(true)
    const [form, setForm] = useState({
        query: '',
        assignedUsers: [],
        userIds: [],
        type: [],
        status: [],
        rank: []
    })

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target
        if (name === 'query') {
            setForm({...form, [name]: value})
        } else {
            setForm({...form, [name]: value !== '' ? [value] : []})
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        events.fetch(form)
    }
    ///////////////////////////////////////////////

    function change(evt) {
        const {name, value} = evt.target
        if (form[name].indexOf(value) === -1) {
            setForm({...form, [name]: [...form[name], value]})
        } else {
            // setForm({...form, [name]: form[name].splice(form[name].indexOf(value), 1)})
            setForm({...form, [name]: form[name].filter((i) => i !== value)})
        }
    }

    function selectName(defaultName, name) {
        if (form[name]?.length === 0) {
            return defaultName
        } else if (form[name]?.length === 1) {
            return form[name]
        } else if (form[name]?.length > 1) {
            return `Выбрано: ${form[name].length}`
        }
    }

    console.log(form)




    return (
        <form className="board-filter" onSubmit={handleSubmit}>


            <fieldset className="board-filter__type" style={{position: 'relative'}}>
                {menuActive ?
                    <div onClick={() => setMenuActive(true)}>{selectName('Тип', 'type')}</div>
                    :
                    <>
                        <div onClick={() => setMenuActive(true)}>{selectName('Тип', 'type')}</div>
                    </>
                }

                <Menu menuActive={menuActive} setMenuActive={setMenuActive} clickInsideClosesMenu={false}>

                    <li>
                        <label className="custom-checkbox" htmlFor="key1">
                            <input className="custom-checkbox__input" id="key1" type="checkbox" value="task"
                                   onClick={change} name="type"/>
                            <span>Задача</span>
                        </label>
                    </li>

                    <li>
                        <label className="custom-checkbox" htmlFor="key2">
                            <input className="custom-checkbox__input" id="key2" type="checkbox" value="bug"
                                   onClick={change} name="type"/>
                            <span>Ошибка</span>
                        </label>
                    </li>

                </Menu>
            </fieldset>













                {/*<select*/}
                {/*    className="board-filter__type"*/}
                {/*    value={form.type}*/}
                {/*    name="type"*/}
                {/*    onChange={handleFieldChange}*/}
                {/*    // multiple={false}*/}
                {/*>*/}
                {/*    <option value="" className="board-filter__type-item">Тип</option>*/}
                {/*    <option value="task" className="board-filter__type-item">Задача</option>*/}
                {/*    <option value="bug" className="board-filter__type-item">Ошибка</option>*/}
                {/*</select>*/}

            <input
                type="text"
                className="board-filter__input"
                value={form.query}
                name="query"
                onChange={handleFieldChange}
            />

            <select
                className="board-filter__user"
                value={form.assignedUsers}
                name="assignedUsers"
                onChange={handleFieldChange}
            >
                <option value="" className="board-filter__user-item">Пользователь</option>

                {users.map(user =>
                    <option value={user.id} key={user.id} className="board-filter__user-item">{user.username}</option>
                )}


            </select>

            <select
                className="board-filter__status"
                value={form.status}
                name="status"
                onChange={handleFieldChange}
            >
                <option value="" className="board-filter__status-item">Статус</option>
                <option value="opened" className="board-filter__status-item">Открыто</option>
                <option value="inProgress" className="board-filter__status-item">В работе</option>
                <option value="testing" className="board-filter__status-item">Тестирование</option>
                <option value="complete" className="board-filter__status-item">Сделано</option>
            </select>

            <select
                id=""
                className="board-filter__priority"
                value={form.rank}
                name="rank"
                onChange={handleFieldChange}
            >
                <option value="" className="board-filter__priority-item">Приоритет</option>
                <option value="low" className="board-filter__priority-item">Низкий</option>
                <option value="medium" className="board-filter__priority-item">Средний</option>
                <option value="high" className="board-filter__priority-item">Высокий</option>
            </select>

            <button type="submit" className="board-filter__btn button button--primary">Применить</button>
        </form>
    );


};

export default TaskFilter;