import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import {useParams} from "react-router-dom";
import Comment from "./Comment";
import {events} from "../store/store";
import {observer} from "mobx-react";
import Dropdown from "./UI/Dropdown";
import moment from "moment";
import "moment/locale/ru";


const BoardTaskOpen = observer(({currentTask, users}) => {

    const {id} = useParams()
    const [modalActive, setModalActive] = useState(false)

    const measureUnit = [{value: 'minutes', name: 'Минуты'}, {value: 'hours', name: 'Часы'}, {value: 'days', name: 'Дни'},]
    const measureUnitTitle = {defaultName: 'Выбрать', name: 'measureUnit'}

    useEffect(() => {
        events.getComments(id)
    }, [])

    function getUserName(UserId) {
        let username = users.find(user => user.id === UserId)
        return username
    }

    function minutesToDHM(time) {

        moment.relativeTimeThreshold('m', 60)
        moment.relativeTimeThreshold('h', 24)
        moment.relativeTimeThreshold('s', 60)

        const duration = moment.duration(time, 'minutes');

        const days = duration.days()
        const hours = duration.hours()
        const minutes = duration.minutes()

        const daysHumanize = moment.duration(days, 'days').humanize();
        const hoursHumanize = moment.duration(hours, 'hours').humanize();
        const minutesHumanize = moment.duration(minutes, 'minutes').humanize();

        const dDisplay = days > 0 ? ( days === 1 ? `1 ${daysHumanize}`: daysHumanize) : "";
        const hDisplay = hours > 0 ? ( hours === 1 ? `1 ${hoursHumanize}`: hoursHumanize) : "";
        const mDisplay = minutes > 0 ? ( minutes === 1 ? `1 ${minutesHumanize}`: minutesHumanize) : "";

        return `${dDisplay} ${hDisplay} ${mDisplay}`
    }

    /////////////////////// WORKTIME FORM ///////////////////////////

    const [worktimeForm, setWorktimeForm] = useState({
        timeInMinutes: 0,
        comment: "",
        currentUser: localStorage.getItem('userId'),
        measureUnit: '',
    })
    const handleFieldChangeWorktime = (evt) => {
        const {name, value} = evt.target
        setWorktimeForm({...worktimeForm, [name]: value})
    }
    async function handleSubmit(evt){
        evt.preventDefault()
        await events.changeWorkTimeTask(id, {
            timeInMinutes: worktimeForm.measureUnit === 'days' && worktimeForm.timeInMinutes * 1440 || worktimeForm.measureUnit === 'hours' && worktimeForm.timeInMinutes * 60 || worktimeForm.timeInMinutes,
            comment: worktimeForm.comment,
            currentUser: worktimeForm.currentUser,
        })
        await events.getComments(id)
        setModalActive(false)
        setWorktimeForm({
            timeInMinutes: 0,
            comment: "",
            currentUser: localStorage.getItem('userId'),
            measureUnit: '',
        })
    }

    //////////////////////// COMMENT FORM ////////////////////////////

    const [commentForm, setCommentForm] = useState({
        taskId: id,
        userId: localStorage.getItem('userId'),
        text: '',
    })

    function changeCommentForm(evt) {
        setCommentForm({
            ...commentForm,
            text: evt.target.value,
        });
    }

    async function handleCommentSubmit(evt) {
        evt.preventDefault()
        setCommentForm({
            taskId: id,
            userId: localStorage.getItem('userId'),
            text: '',
        })
        await events.createOrEditComment(commentForm)
        await events.getComments(id)
    }


    return (
        <>
            <div className="task-open">
                <div className="task-open__info">
                    <h4 className="task-open__info-title">Исполнитель</h4>
                    <p className="task-open__info-text">
                        {getUserName(currentTask.assignedId) !== undefined ? getUserName(currentTask.assignedId).username : ''}
                    </p>

                    <h4 className="task-open__info-title">Автор задачи</h4>
                    <p className="task-open__info-text">
                        {getUserName(currentTask.userId) !== undefined ? getUserName(currentTask.userId).username : ''}
                    </p>

                    <h4 className="task-open__info-title">Тип запроса</h4>
                    <p className="task-open__info-text">
                        {currentTask.type === 'bug' && 'Ошибка' || currentTask.type === 'task' && 'Задача'}
                    </p>

                    <h4 className="task-open__info-title">Приоритет</h4>
                    <p className="task-open__info-text">
                        {currentTask.rank === 'low' && 'Низкий' || currentTask.rank === 'medium' && 'Средний' || currentTask.rank === 'high' && 'Высокий'}
                    </p>

                    <h4 className="task-open__info-title">Дата создания</h4>
                    <p className="task-open__info-text">{moment(currentTask.dateOfCreation).format('DD.MM.YYYY HH:mm')}</p>

                    <h4 className="task-open__info-title">Дата изменения</h4>
                    <p className="task-open__info-text">{moment(currentTask.dateOfUpdate).format('DD.MM.YYYY HH:mm')}</p>

                    <h4 className="task-open__info-title">Затрачено времени</h4>
                    <p className="task-open__info-text">{minutesToDHM(currentTask.timeInMinutes)}</p>

                    <button className="task-open__info-bnt button button--primary"
                            onClick={() => setModalActive(true)}>Сделать запись о работе
                    </button>
                </div>

                <div className="task-open__description">
                    <h4 className="task-open__description-title">Описание</h4>
                    <p className="task-open__description-text">{currentTask.description}</p>
                </div>

                <div className="task-open__comments">
                    <h4 className="task-open__comments-title">{`Комментарии (${events.comments.length})`}</h4>
                    <form onSubmit={handleCommentSubmit}>
                        <textarea value={commentForm.text} onChange={changeCommentForm} required name="" id="" cols="30"
                                  rows="10" className="task-open__comments-textarea"/>
                        <button type="submit" className="task-open__comments-btn button button--success">Добавить
                            комментарий
                        </button>
                    </form>

                    <div className="task-open__comments-wrapper">
                        {events.comments.map(comment =>
                            <Comment username={getUserName} comment={comment} key={comment.id}/>
                             )
                        }
                    </div>
                </div>
            </div>



            <Modal modalActive={modalActive} setModalActive={setModalActive}>
                <form className="" onSubmit={handleSubmit}>
                    <h2 className="modal__window-title">Запись о работе</h2>
                    <div className="modal__window-body">

                        <label htmlFor="timeInMinutes" className="modal__window-subtitle">Затраченное время</label>
                        <input
                            id="timeInMinutes"
                            className="modal__window-input"
                            onChange={handleFieldChangeWorktime}
                            name="timeInMinutes"
                            value={worktimeForm.timeInMinutes}
                            required
                            type="number"
                        />

                        <label htmlFor='measureUnit' className="modal__window-subtitle">Единицы измерения</label>
                        <Dropdown change={handleFieldChangeWorktime} form={worktimeForm} values={measureUnit} title={measureUnitTitle} clickInsideCloseMenu={true} inputType={'radio'} className={'modal__window-select'}/>

                        <label htmlFor='comment' className="modal__window-subtitle">Комментарии</label>
                        <textarea
                            id="comment"
                            className="modal__window-textarea"
                            onChange={handleFieldChangeWorktime}
                            name="comment"
                            value={worktimeForm.comment}
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
});

export default BoardTaskOpen;