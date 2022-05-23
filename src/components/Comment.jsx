import React from 'react';
import {events} from "../store/store";
import moment from "moment";

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
                    <div className="comment__header-username">{username(comment.userId).username} ({moment(comment.dateOfCreation).format('DD.MM.YY HH:mm')})</div>
                    {comment.userId === localStorage.getItem('userId') &&
                    <button onClick={handleDeleteComment} className="comment__header-button">Удалить</button>
                    }
                </div>
                <div className="comment__text">{comment.text}</div>


            </div>
        </>
    );
};

export default Comment;