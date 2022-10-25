import React from 'react';
import {events} from "../../store/store";
import moment from "moment";
import './Comment.scss'

const Comment = ({comment, username}) => {

     async function handleDeleteComment(evt) {
        evt.preventDefault()
       await events.deleteComment(comment.id)
       await events.getComments(comment.taskId)
    }

    return (
        <>
            <div className="task-open__comments-item comment">
                <div className="comment__header">
                    <h4 className="comment__header-username">{username(comment.userId).username} ({moment(comment.dateOfCreation).format('DD.MM.YY HH:mm')})</h4>
                    {comment.userId === localStorage.getItem('userId') &&
                    <button onClick={handleDeleteComment} className="comment__header-button">Удалить</button>
                    }
                </div>
                <p className="comment__text">{comment.text}</p>
            </div>
        </>
    );
};

export default Comment;