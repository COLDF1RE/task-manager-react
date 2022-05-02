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
                    className={`pagination__nav-prev ${page === 1 && "pagination__nav-prev--disabled"}`}
                    onClick={prevPage}
                >Назад
                </button>
                {[...Array(totalPages).keys()].map((el) => (
                    <button
                        className={`page ${page === el + 1 ? "pagination__nav-page pagination__nav-page--active" : "pagination__nav-page"}`}
                        onClick={() => setPage(el + 1)}
                        key={el}
                    >{el + 1}
                    </button>
                ))}
                <button
                    className={`pagination__nav-next ${page === totalPages && "pagination__nav-next--disabled"}`}
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