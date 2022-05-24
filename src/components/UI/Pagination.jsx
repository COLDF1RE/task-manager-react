import React from 'react';

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
                <button
                    className={`pagination__nav-prev button ${page === 1 ? "button--disabled" : "button--default"}`}
                    onClick={prevPage}
                >Назад
                </button>
                {[...Array(totalPages).keys()].map((el) => (
                    <button
                        className={`pagination__nav-page button ${page === el + 1 ? "button--primary" : "button--default"}`}
                        onClick={() => setPage(el + 1)}
                        key={el}
                    >{el + 1}
                    </button>
                ))}
                <button
                    className={`pagination__nav-next button ${page === totalPages ? "button--disabled" : "button--default"}`}
                    onClick={nextPage}
                >Вперед
                </button>
            </div>
            <div className="pagination__info">
                {`Показано ${firstContentIndex + 1} - ${lastContentIndex <= tasksLength ? lastContentIndex : tasksLength} из ${tasksLength}`}
            </div>
        </div>
    );
};

export default Pagination;