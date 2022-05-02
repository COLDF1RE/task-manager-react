import React from 'react';

const TaskFilter = () => {
    return (
        <div className="board-filter">
            <select name="" id="" className="board-filter__type">
                <option value="" className="board-filter__type-item">тип</option>
                <option value="" className="board-filter__type-item">тип</option>
                <option value="" className="board-filter__type-item">тип</option>
                <option value="" className="board-filter__type-item">тип</option>
            </select>

            <input type="text" className="board-filter__input"/>

                <select name="" id="" className="board-filter__user">
                    <option value="" className="board-filter__user-item">Пользователь</option>
                    <option value="" className="board-filter__user-item">Пользователь</option>
                    <option value="" className="board-filter__user-item">Пользователь</option>
                    <option value="" className="board-filter__user-item">Пользователь</option>
                </select>

                <select name="" id="" className="board-filter__status">
                    <option value="" className="board-filter__status-item">Статус</option>
                    <option value="" className="board-filter__status-item">Статус</option>
                    <option value="" className="board-filter__status-item">Статус</option>
                    <option value="" className="board-filter__status-item">Статус</option>
                </select>

                <select name="" id="" className="board-filter__priority">
                    <option value="" className="board-filter__priority-item">Приоритет</option>
                    <option value="" className="board-filter__priority-item">Приоритет</option>
                    <option value="" className="board-filter__priority-item">Приоритет</option>
                    <option value="" className="board-filter__priority-item">Приоритет</option>
                </select>
                <button className="board-filter__btn">Применить</button>
        </div>
    );
};

export default TaskFilter;