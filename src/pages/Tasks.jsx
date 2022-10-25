import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {pages} from "../router/pages";
import TaskFilter from "../components/TaskFilter/TaskFilter";
import Task from "../components/Task/Task";
import EmptyList from "../components/UI/EmptyList/EmptyList";
import Pagination from "../components/UI/Pagination/Pagination";
import {events} from "../store/store";
import Header from "../components/Header/Header";
import usePagination from "../hooks/usePagination";
import {observer} from "mobx-react";
import Footer from "../components/Footer/Footer";
import BoardHeader from "../components/BoardHeader/BoardHeader";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import Board from "../components/UI/Board/Board";
import MyButton from "../components/UI/MyButton/MyButton";

const Tasks = observer(() => {

    useEffect(() => {
        events.fetch()
    }, [])

    const users = events.users || []
    const tasks = events.tasks.data || []

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
        // count: tasks ? tasks.length : '',
        count: events.tasks.total || 0,
    });


    function getUserName(taskUserId) {
        const username = users.find(user => user.id === taskUserId)
        return username
    }

    return (
        <div className="wrapper">
            <Header tasksActive={true}/>

            <div className="main">

                <BoardHeader
                    title={<h1 className="board-header__info-title">Задачи</h1>}
                    buttons={
                        <MyButton className="board-header__options-btn button button--primary">
                            <Link to={pages.taskAdd}>Добавить задачу</Link>
                        </MyButton>
                    }
                />

                {/*<section className="board-header">*/}
                {/*    <div className="board-header__info">*/}
                {/*        <h1 className="board-header__info-title">Задачи</h1>*/}
                {/*    </div>*/}
                {/*    <div className="board-header__options">*/}
                {/*        <Link to={pages.taskAdd} className="board-header__options-btn button button--primary">Добавить задачу</Link>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <Board>
                    <TaskFilter users={users}/>

                    <Wrapper className="tasks-wrapper">
                        {tasks.length ?
                            tasks.slice(firstContentIndex, lastContentIndex)
                                .map(task =>
                                    <Task task={task} key={task.id}
                                            username={getUserName(task.assignedId) !== undefined ? getUserName(task.assignedId).username : getUserName(task.userId)}/>
                                )
                            :
                            <EmptyList/>
                        }
                    </Wrapper>

                    <Pagination
                        nextPage={nextPage}
                        prevPage={prevPage}
                        // tasksLength={tasks.length}
                        tasksLength={events.tasks.total || 0}
                        firstContentIndex={firstContentIndex}
                        lastContentIndex={lastContentIndex}
                        totalPages={totalPages}
                        page={page}
                        setPage={setPage}
                    />
                </Board>
            </div>

            <Footer/>
        </div>
    );
});

export default Tasks;