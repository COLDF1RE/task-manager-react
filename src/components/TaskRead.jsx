import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import {useParams} from "react-router-dom";
import Comment from "./Comment";
import {events} from "../store/store";

const TaskRead = ({currentTask, users}) => {

    const {id} = useParams()
    const [modalActive, setModalActive] = useState(false)

    function getUserName(UserId) {
        let username = users.find(user => user.id === UserId)
        return username
    }

    //////////////////// !!!!! GET COMMENTS //////////////////

    // let comments = events.getComments(currentTask.id)

    //////////////////////////////////////////////////////////


    const [form, setForm] = useState({
        timeInMinutes: 0,
        comment: "",
        currentUser: ""
    })

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        //     events.editEvent({
        //         id: event._id,
        //         favorite: event.favorite,
        //         archive: event.archive,
        //         ...form
        //     })
        //     handleClick()


        console.log('submit worktime form', form)
    }


    return (
        <>
            <div className="task-open">
                <div className="task-open__info">
                    <div className="task-open__info-title">Исполнитель</div>
                    <div className="task-open__info-text">
                        {getUserName(currentTask.assignedId) !== undefined ? getUserName(currentTask.assignedId).username : 'unknown'}
                    </div>

                    <div className="task-open__info-title">Автор задачи</div>
                    <div className="task-open__info-text">
                        {getUserName(currentTask.userId) !== undefined ? getUserName(currentTask.userId).username : 'unknown'}
                    </div>

                    <div className="task-open__info-title">Тип запроса</div>
                    <div className="task-open__info-text">
                        {currentTask.type === 'bug' && 'Ошибка' || currentTask.type === 'task' && 'Задача'}
                    </div>

                    <div className="task-open__info-title">Приоритет</div>
                    <div className="task-open__info-text">
                        {currentTask.rank === 'low' && 'Низкий' || currentTask.rank === 'medium' && 'Средний' || currentTask.rank === 'high' && 'Высокий'}
                    </div>

                    <div className="task-open__info-title">Дата создания</div>
                    <div className="task-open__info-text">{currentTask.dateOfCreation}</div>

                    <div className="task-open__info-title">Дата изменения</div>
                    <div className="task-open__info-text">{currentTask.dateOfUpdate}</div>

                    <div className="task-open__info-title">Затрачено времени</div>
                    {/*<div className="task-open__info-text">0 часов 0 минут</div>*/}
                    <div className="task-open__info-text">{currentTask.timeInMinutes}</div>

                    <button className="task-open__info-bnt button button--primary"
                            onClick={() => setModalActive(true)}>Сделать запись о работе
                    </button>
                </div>

                <div className="task-open__description">
                    <div className="task-open__description-title">Описание</div>
                    <div className="task-open__description-text">{currentTask.description}</div>
                </div>

                <div className="task-open__comments">
                    {/*<div className="task-open__comments-title">{`Комментарии(${currentTask.comments.length})`}</div>*/}
                    <textarea name="" id="" cols="30" rows="10" className="task-open__comments-textarea"/>
                    <button className="task-open__comments-btn button button--success">Добавить комментарий</button>

                    <div className="task-open__comments-item">


                        {events.comments.length !== 0 && events.comments.map(comment =>
                            <Comment comment={comment} key={comment.id}/>
                        )}


                    </div>
                </div>
            </div>

            <Modal modalActive={modalActive} setModalActive={setModalActive}>
                <form className="" onSubmit={handleSubmit}>
                    <div className="modal__window-title">Запись о работе</div>
                    <div className="modal__window-body">

                        <label htmlFor="time" className="modal__window-subtitle">Затраченное время</label>
                        <input
                            className="modal__window-input"
                            onChange={handleFieldChange}
                            name="time"
                            value=''
                            required
                        />

                        <label htmlFor='measureUnit' className="modal__window-subtitle">Единицы измерения</label>
                        <select
                            className="modal__window-select"
                            onChange={handleFieldChange}
                            name="measureUnit"
                            value=''
                            required
                        >
                            <option value="" className="">Минуты</option>
                            <option value="" className="">Часы</option>
                            <option value="" className="">Дни</option>
                        </select>

                        <label htmlFor='comment' className="modal__window-subtitle">Комментарии</label>
                        <textarea
                            className="modal__window-textarea"
                            onChange={handleFieldChange}
                            name="comment"
                            value=''
                            required
                        />
                    </div>
                    <div className="modal__window-buttons">
                        <button type="submit" className="modal__window-submit button button--primary">Добавить</button>
                        <button className="modal__window-cancel button button-default"
                                onClick={() => setModalActive(false)}>Отмена
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default TaskRead;