import React from 'react';

const Rank = ({rank}) => {
    return (
        <div className="rank">
            <div className="rank__icon">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {rank === 'low'    && <path d="M7 8L14 0L7 4L0 0L7 8Z" fill="#3CA961"/>}
                    {rank === 'medium' && <path d="M7 0L0 3L7 6L14 3L7 0Z" fill="#E9B500"/>} 
                    {rank === 'high'   && <path d="M7 0L0 8L7 4L14 8L7 0Z" fill="#D14343"/>}    
                </svg>
            </div>
            {rank === 'low'    && <p className="rank__text rank__text--green">Низкий</p>}
            {rank === 'medium' && <p className="rank__text rank__text--yellow">Средний</p>}
            {rank === 'high'   && <p className="rank__text rank__text--red">Высокий</p>}
        </div>
    )
};

export default Rank;