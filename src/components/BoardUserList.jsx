import React from 'react';
import usePagination from "../hooks/usePagination";
import User from "./User";
import EmptyList from "./EmptyList";
import Pagination from "./UI/Pagination";

const BoardUserList = ({users}) => {

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 10,
        count: users.length,
    });

    return (
        <>
            <div className="tasks-wrapper">
                {users.length ?
                    users.slice(firstContentIndex, lastContentIndex).map(user => <User user={user} key={user.id}/>)
                    :
                    <EmptyList/>
                }
            </div>
            <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                tasksLength={users.length}
                firstContentIndex={firstContentIndex}
                lastContentIndex={lastContentIndex}
                totalPages={totalPages}
                page={page}
                setPage={setPage}
            />
        </>
    );
};

export default BoardUserList;