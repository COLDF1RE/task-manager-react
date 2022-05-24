import React, {useState} from 'react';
import Menu from "./Menu";
import {events} from "../../store/store";

const Dropdown = ({change, title, values, form, inputType, clickInsideCloseMenu, className}) => {

    const [menuActive, setMenuActive] = useState(false)

    function dropdownName(defaultName, name) {
        //Когда не выбран не один чекбокс
        if (form[name]?.length === 0) {
            return defaultName
        //Когда выбрано больше 1
        } else if (typeof form[name] === 'object' && form[name]?.length > 1) {
            return `Выбрано: ${form[name].length}`
        //Когда выбран 1 чекбокс. Если есть такой ключ, то в зависимости от value возвращает нужное значение
        } else {
            if (name === 'type'){
                return form[name].toString() === 'task' && 'Задача' || form[name].toString() === 'bug' && 'Ошибка'
            } else if (name === 'status') {
                return form[name].toString() === 'opened' && 'Открыто' || form[name].toString() === 'inProgress' && 'В работе' || form[name].toString() === 'testing' && 'На тестировании' || form[name].toString() === 'complete' && 'Сделано'
            } else if (name === 'rank') {
                return form[name].toString() === 'low' && 'Низкий' || form[name].toString() === 'medium' && 'Средний' || form[name].toString() === 'high' && 'Высокий'
            } else if (name === 'assignedUsers' || 'userId') {
                const users = events.users || []
                const currentUser = users.find(user => user.id === form[name].toString())
                return currentUser.username
            } else if (name === 'measureUnit'){
                return form[name].toString() === 'minutes' && 'Минуты' || form[name].toString() === 'hours' && 'Часы' || form[name].toString() === 'days' && 'Дни'
            // Если ключа нет - возвращает value
            } else {
                return form[name]
            }
        }
    }

    return (
        <fieldset className={className}>
            {/* Особенность хука useOnClickOutside - повторное нажатие на кнопку открытия меню не приводит к его закрытию)
                фиксируется 2-ое нажатие - закрывает и сразу открывает вновь. Перепробовал 5-6 других реализаций - тоже самое.
                В качестве временного решения написал код ниже. Он вам еще может встретится в других компонентах порядка 2 раз
            */}
            {menuActive ?
                <button className="custom-checkbox__title" onClick={() => setMenuActive(true)}>{dropdownName(title.defaultName, title.name)}</button>
                :
                <>
                <button className="custom-checkbox__title" onClick={() => setMenuActive(true)}>{dropdownName(title.defaultName, title.name)}</button>
                </>
            }
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} clickInsideClosesMenu={clickInsideCloseMenu || false}>
                {values.map(item =>
                    <li key={item.value || item.id}>
                        <label className="custom-checkbox" htmlFor={item.value || item.id}>
                            <input className="custom-checkbox__input" id={item.value || item.id} type={inputType || "checkbox"} value={item.value || item.id}
                                   onClick={change} name={title.name}/>
                            <span>{item.name || item.username}</span>
                        </label>
                    </li>
                )}
            </Menu>
        </fieldset>
    );
};

export default Dropdown;