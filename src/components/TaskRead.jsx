import React from 'react';
import Modal from "./Modal";
import {useParams} from "react-router-dom";
import Comment from "./Comment";

const TaskRead = ({tasks}) => {

    const {id} = useParams()
    const currentTask = tasks.find(task => task.id === id)

    return (
        <>

            {/*<Modal/>*/}

            <div className="task-open">
                <div className="task-open__info">
                    <div className="task-open__info-title">Исполнитель</div>
                    <div className="task-open__info-text">{currentTask.user}</div>

                    <div className="task-open__info-title">Автор задачи</div>
                    <div className="task-open__info-text">{currentTask.author}</div>

                    <div className="task-open__info-title">Тип запроса</div>
                    <div className="task-open__info-text">{currentTask.type2}</div>

                    <div className="task-open__info-title">Приоритет</div>
                    <div className="task-open__info-text">{currentTask.rank}</div>

                    <div className="task-open__info-title">Дата создания</div>
                    <div className="task-open__info-text">{currentTask.dateOfCreation}</div>

                    <div className="task-open__info-title">Дата изменения</div>
                    <div className="task-open__info-text">{currentTask.dateOfChange}</div>

                    <div className="task-open__info-title">Затрачено времени</div>
                    <div className="task-open__info-text">0 часов 0 минут</div>

                    <button className="task-open__info-bnt">Сделать запись о работе</button>
                </div>

                <div className="task-open__description">
                    <div className="task-open__description-title">Описание</div>
                    <div className="task-open__description-text">{currentTask.description}</div>
                </div>

                <div className="task-open__comments">
                    <div className="task-open__comments-title">{`Комментарии(${currentTask.comments.length})`}</div>
                    <textarea name="" id="" cols="30" rows="10" className="task-open__comments-textarea"></textarea>
                    <button className="task-open__comments-btn">Добавить комментарий</button>

                    {/*<div className="task-open__comments-item">*/}

                        {currentTask.comments.map(comment =>
                            <Comment comment={comment} key={comment.id}/>
                        )}

                    {/*</div>*/}
                </div>
            </div>

        </>
    );
};

export default TaskRead;