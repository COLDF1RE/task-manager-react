import React from 'react';
import { CustomSelect } from '../customSelect';
import { useState } from 'react';
import {getFilteredTasks} from "../API/api";

const TaskFilter = () => {

    // const typeSelect = new CustomSelect({
    //     elem: document.getElementById('type-select')
    // })
    //
    //
    // var animalSelect = new CustomSelect({
    //     elem: document.getElementById('animal-select')
    // });
    //
    //
    // document.addEventListener('select', function(event) {
    //     document.getElementById('result').innerHTML = event.detail.value;
    // });




    // var expanded = false;
    //
    // function showCheckboxes() {
    //     var checkboxes = document.getElementById("checkboxes");
    //     if (!expanded) {
    //         checkboxes.style.display = "block";
    //         expanded = true;
    //     } else {
    //         checkboxes.style.display = "none";
    //         expanded = false;
    //     }
    // }
    //
    //
    // const [form, setForm] = useState({type: '', type2: ''})
    //
    // const handleSubmit = (evt) => {
    //     evt.preventDefault()
    //     setForm(...form, )
    //     console.log('submit form', form)
    // }
    //
    // const handleFieldChange = (evt) => {
    //     const {name, value} = evt.target
    //     setForm({...form, [name]: value})
    // }

    return (
        <div className="board-filter">

            {/*<div>Последний результат: <span id="result">...</span></div>*/}
            {/*<div id="animal-select" className="customselect">*/}
            {/*    <button className="title">Выберите</button>*/}
            {/*    <ul>*/}
            {/*        <li data-value="bird">Птицы</li>*/}
            {/*        <li data-value="fish">Рыбы</li>*/}
            {/*        <li data-value="animal">Звери</li>*/}
            {/*        <li data-value="dino">Динозавры</li>*/}
            {/*        <li data-value="simplest">Одноклеточные</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}


            {/*<form  onSubmit={handleSubmit}>*/}
            {/*    <div className="multiselect">*/}
            {/*        <div className="selectBox" onClick={showCheckboxes} >*/}
            {/*            <select>*/}
            {/*                <option>Select an option</option>*/}
            {/*            </select>*/}
            {/*            <div className="overSelect"></div>*/}
            {/*        </div>*/}
            {/*        <div id="checkboxes">*/}
            {/*            <label htmlFor="one">*/}
            {/*                <input onChange={handleFieldChange} type="checkbox" id="one"/>First checkbox</label>*/}
            {/*            <label htmlFor="two">*/}
            {/*                <input type="checkbox" id="two"/>Second checkbox</label>*/}
            {/*            <label htmlFor="three">*/}
            {/*                <input type="checkbox" id="three"/>Third checkbox</label>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button type="submit" className="btn-submit">ryjgrf</button>*/}
            {/*</form>*/}








            <select name="" id="" className="board-filter__type">
                <option disabled value="" className="board-filter__type-item">Тип</option>
                <option value="" className="board-filter__type-item">Задача</option>
                <option value="" className="board-filter__type-item">Ошибка</option>
            </select>

            <input type="text" className="board-filter__input"/>

                <select name="" id="" className="board-filter__user">
                    <option value="" className="board-filter__user-item">Пользователь</option>
                    <option value="" className="board-filter__user-item">Вася</option>
                    <option value="" className="board-filter__user-item">Сережа</option>
                    <option value="" className="board-filter__user-item">Саня</option>
                </select>

                <select name="" id="" className="board-filter__status">
                    <option value="" className="board-filter__status-item">Статус</option>
                    <option value="" className="board-filter__status-item">Открыто</option>
                    <option value="" className="board-filter__status-item">В работе</option>
                    <option value="" className="board-filter__status-item">Тестировние</option>
                    <option value="" className="board-filter__status-item">Сделано</option>
                </select>

                <select name="" id="" className="board-filter__priority">
                    <option value="" className="board-filter__priority-item">Приоритет</option>
                    <option value="" className="board-filter__priority-item">Низкий</option>
                    <option value="" className="board-filter__priority-item">Средний</option>
                    <option value="" className="board-filter__priority-item">Высокий</option>
                </select>
                <button onClick={getFilteredTasks} className="board-filter__btn button button--primary">Применить</button>
        </div>
    );



};

export default TaskFilter;