import React from 'react';
import './EmptyList.scss'

const EmptyList = () => {
    return (
        <div className="empty-list">
            <h4 className="empty-list__title"> Список пуст...</h4>
        </div>
    );
};

export default EmptyList;