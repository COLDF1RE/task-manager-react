import React from 'react';
import usePagination from "../hooks/usePagination";
import User from "./User";
import NoTasks from "./NoTasks";
import Pagination from "./Pagination";

const UserList = ({users}) => {

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 8,
        count: users.length,
    });

    return (
        <>
            <div className="tasks-wrapper">
                {/*//////////////////*/}
                {users.length !== 0
                    ? users.slice(firstContentIndex, lastContentIndex).map(user => <User user={user} key={user.id}/>)

                    : <NoTasks/>
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

export default UserList;