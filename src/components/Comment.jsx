import React from 'react';

const Comment = ({comment}) => {
    return (
        <>
            <div className="task-open__comments-item-username">{comment.user}</div>
            <div className="task-open__comments-item-text">{comment.comment}</div>
            <button className="task-open__comments-item-btn">Удалить</button>
        </>
    );
};

export default Comment;