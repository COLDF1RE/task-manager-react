import React from 'react';
import './Status.scss'

const Status = ({status}) => {

    const theStatus = {
        opened: {className: 'status--default', title: 'Открыто'},
        inProgress: {className: 'status--yellow', title: 'Работе'},
        testing: {className: 'status--yellow', title: 'Тестирование'},
        complete: {className: 'status--green', title: 'Сделано'},
    }

    return (
        <div className={`status ${theStatus[status].className}`}>{theStatus[status].title}</div>
    );
};

export default Status;