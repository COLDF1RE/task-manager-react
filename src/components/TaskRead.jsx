import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import {useParams} from "react-router-dom";
import Comment from "./Comment";
import {events} from "../store/store";
import {observer} from "mobx-react";
import Dropdown from "./Dropdown/Dropdown";
import moment from "moment";
import "moment/locale/ru";

// const TaskRead = ({currentTask, users}) => {
const TaskRead = observer(({currentTask, users}) => {

    const {id} = useParams()
    const [modalActive, setModalActive] = useState(false)

    const measureUnit = [{value: 'minutes', name: 'Минуты'}, {value: 'hours', name: 'Часы'}, {value: 'days', name: 'Дни'},]
    const measureUnitTitle = {defaultName: 'Выбрать', name: 'measureUnit', className: 'modal__window-select'}


    const [comments , setComments] = useState()

    useEffect(() => {
        events.getComments(id)
    }, [])

    function getUserName(UserId) {
        let username = users.find(user => user.id === UserId)
        return username
    }

    /////////////////////// WORKTIME FORM ///////////////////////////

    const [worktimeForm, setWorktimeForm] = useState({
        timeInMinutes: 0,
        comment: "",
        // currentUser: "6273dcf6d09b551dca8762a0",
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
        // userId: "6273dcf6d09b551dca8762a0",
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
            // userId: "6273dcf6d09b551dca8762a0",
            userId: localStorage.getItem('userId'),
            text: '',
        })
        await events.createOrEditComment(commentForm)
        await events.getComments(id)
    }






    // function minutesToDHM2(minutes) {
    //     minutes = Number(minutes);
    //     const d = Math.floor(minutes / 1440);
    //     const h = Math.floor(minutes % 1440 / 60);
    //     const m = Math.floor(minutes % 60);
    //
    //     const dDisplay = d > 0 ? d + cases(d, " день, ", " дня, ", " дней, ") : "";
    //     const hDisplay = h > 0 ? h + cases(h, " час, ", " часа, ", " часов, ") : "";
    //     const mDisplay = m > 0 ? m + cases(m, " минута, ", " минуты, ", " минут, ") : "";
    //
    //     function cases (num, case1, case2, case3) {
    //         if (num === 1) {
    //             return case1
    //         } else if ( 1 < num < 5 ) {
    //             return case2
    //         } else {
    //             return case3
    //         }
    //     }
    //     return dDisplay + hDisplay + mDisplay;
    // }
    // console.log(minutesToDHM2(5541))



    function minutesToDHM(time) {

        moment.relativeTimeThreshold('m', 60)
        moment.relativeTimeThreshold('h', 24)
        moment.relativeTimeThreshold('s', 60)

        const duration = moment.duration(time, 'minutes');

        const days = duration.days()
        const daysHumanize = moment.duration(days, 'days').humanize();

        const hours = duration.hours()
        const hoursHumanize = moment.duration(hours, 'hours').humanize();

        const minutes = duration.minutes()
        const minutesHumanize = moment.duration(minutes, 'minutes').humanize();

        const dDisplay = days > 0 ? ( days === 1 ? `1 ${daysHumanize}`: daysHumanize) : "";
        const hDisplay = hours > 0 ? ( hours === 1 ? `1 ${hoursHumanize}`: hoursHumanize) : "";
        const mDisplay = minutes > 0 ? ( minutes === 1 ? `1 ${minutesHumanize}`: minutesHumanize) : "";

        return `${dDisplay} ${hDisplay} ${mDisplay}`
    }


    return (
        <>
            <div className="task-open">
                <div className="task-open__info">
                    <div className="task-open__info-title">Исполнитель</div>
                    <div className="task-open__info-text">
                        {getUserName(currentTask.assignedId) !== undefined ? getUserName(currentTask.assignedId).username : ''}
                    </div>

                    <div className="task-open__info-title">Автор задачи</div>
                    <div className="task-open__info-text">
                        {getUserName(currentTask.userId) !== undefined ? getUserName(currentTask.userId).username : ''}
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
                    <div className="task-open__info-text">{moment(currentTask.dateOfCreation).format('DD.MM.YYYY HH:mm')}</div>

                    <div className="task-open__info-title">Дата изменения</div>
                    <div className="task-open__info-text">{moment(currentTask.dateOfUpdate).format('DD.MM.YYYY HH:mm')}</div>

                    <div className="task-open__info-title">Затрачено времени</div>
                    <div className="task-open__info-text">{minutesToDHM(currentTask.timeInMinutes)}</div>

                    <button className="task-open__info-bnt button button--primary"
                            onClick={() => setModalActive(true)}>Сделать запись о работе
                    </button>
                </div>

                <div className="task-open__description">
                    <div className="task-open__description-title">Описание</div>
                    <div className="task-open__description-text">{currentTask.description}</div>
                </div>

                <div className="task-open__comments">
                    <div className="task-open__comments-title">{`Комментарии (${events.comments.length})`}</div>
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
                    <div className="modal__window-title">Запись о работе</div>
                    <div className="modal__window-body">

                        <label htmlFor="timeInMinutes" className="modal__window-subtitle">Затраченное время</label>
                        <input
                            className="modal__window-input"
                            onChange={handleFieldChangeWorktime}
                            name="timeInMinutes"
                            value={worktimeForm.timeInMinutes}
                            required
                            type="number"
                        />

                        <label htmlFor='measureUnit' className="modal__window-subtitle">Единицы измерения</label>
                        <Dropdown change={handleFieldChangeWorktime} form={worktimeForm} values={measureUnit} title={measureUnitTitle} clickInsideCloseMenu={true} inputType={'radio'}/>

                        <label htmlFor='comment' className="modal__window-subtitle">Комментарии</label>
                        <textarea
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

export default TaskRead;