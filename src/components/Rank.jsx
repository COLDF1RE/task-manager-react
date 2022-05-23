import React from 'react';

const Rank = ({rank}) => {
    return (
        <>
            {rank === 'low' &&
                <div className="task__rank">
                    <div className="task__rank-icon">
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 8L14 0L7 4L0 0L7 8Z" fill="#3CA961"/>
                        </svg>
                    </div>
                    <p className="task__rank-text task__rank-text--green">Низкий</p>
                </div>
            }

            {rank === 'medium' &&
                <div className="task__rank">
                    <div className="task__rank-icon">
                        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L0 3L7 6L14 3L7 0Z" fill="#E9B500"/>
                        </svg>
                    </div>
                    <p className="task__rank-text task__rank-text--yellow">Средний</p>
                </div>
            }

            {rank === 'high' &&
                <div className="task__rank">
                    <div className="task__rank-icon">
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L0 8L7 4L14 8L7 0Z" fill="#D14343"/>
                        </svg>
                    </div>
                    <p className="task__rank-text task__rank-text--red">Высокий</p>
                </div>
            }


            {/*<div className="task__rank">*/}
            {/*    <div className="task__rank-icon">*/}
            {/*        {rank === 'low' &&*/}
            {/*        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path d="M7 8L14 0L7 4L0 0L7 8Z" fill="#3CA961"/>*/}
            {/*        </svg>*/}
            {/*        }*/}
            {/*        {rank === 'medium' &&*/}
            {/*        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path d="M7 8L14 0L7 4L0 0L7 8Z" fill="#3CA961"/>*/}
            {/*        </svg>*/}
            {/*        }*/}
            {/*        {rank === 'high' &&*/}
            {/*        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path d="M7 8L14 0L7 4L0 0L7 8Z" fill="#3CA961"/>*/}
            {/*        </svg>*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*    <p className="task__rank-text">*/}
            {/*        {rank === 'low' && 'Низкий' || rank === 'medium' && 'Средний' || rank === 'high' && 'Высокий'}*/}
            {/*    </p>*/}
            {/*</div>*/}
        </>
    )
};

export default Rank;