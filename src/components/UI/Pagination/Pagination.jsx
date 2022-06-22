import React from 'react';
import MyButton from "../MyButton/MyButton";
import './Pagination.scss'

const Pagination = ({
                        nextPage,
                        prevPage,
                        tasksLength,
                        firstContentIndex,
                        lastContentIndex,
                        totalPages,
                        page,
                        setPage
                    }) => {
    return (
        <div className="pagination">
            <div className="pagination__nav">
                <MyButton
                    className={`pagination__nav-prev button ${page === 1 ? "button--disabled" : "button--default"}`}
                    onClick={prevPage}
                >Назад
                </MyButton>
                {[...Array(totalPages).keys()].map((el) => (
                    <MyButton
                        className={`pagination__nav-page button ${page === el + 1 ? "button--primary" : "button--default"}`}
                        onClick={() => setPage(el + 1)}
                        key={el}
                    >{el + 1}
                    </MyButton>
                ))}
                <MyButton
                    className={`pagination__nav-next button ${page === totalPages ? "button--disabled" : "button--default"}`}
                    onClick={nextPage}
                >Вперед
                </MyButton>
            </div>
            <div className="pagination__info">
                {`Показано ${firstContentIndex + 1} - ${lastContentIndex <= tasksLength ? lastContentIndex : tasksLength} из ${tasksLength}`}
            </div>
        </div>
    );
};

export default Pagination;