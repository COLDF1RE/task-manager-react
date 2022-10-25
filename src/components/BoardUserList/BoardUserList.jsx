import React from 'react';
import usePagination from "../../hooks/usePagination";
import User from "../User/User";
import EmptyList from "../UI/EmptyList/EmptyList";
import Pagination from "../UI/Pagination/Pagination";
import Wrapper from "../UI/Wrapper/Wrapper";

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
            <Wrapper>
                {users.length ?
                    users.slice(firstContentIndex, lastContentIndex).map(user => <User user={user} key={user.id}/>)
                    :
                    <EmptyList/>
                }
            </Wrapper>
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