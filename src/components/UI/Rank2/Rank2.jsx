import React from 'react';
import './Rank2.scss'

const Rank2 = ({rank}) => {

    const theRank = {
        low: {
            className: 'rank__text--green',
            title: 'Низкий',
            icon: <path d="M7 8L14 0L7 4L0 0L7 8Z" fill="#3CA961"/>,
        },
        medium: {
            className: 'rank__text--yellow',
            title: 'Средний',
            icon: <path d="M7 0L0 3L7 6L14 3L7 0Z" fill="#E9B500"/>
        },
        high: {
            className: 'rank__text--red',
            title: 'Высокий',
            icon: <path d="M7 0L0 8L7 4L14 8L7 0Z" fill="#D14343"/>
        }
    }

    return (
        <div className="rank">
            <div className="rank__icon">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {theRank[rank].icon}
                </svg>
                <p className={`rank__text ${theRank[rank].className}`}>{theRank[rank].title}</p>
            </div>
        </div>
    );
};

export default Rank2;