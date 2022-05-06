import React from 'react';
import Header from "../components/Header";
import BoardHeader from "../components/Board-header";
import {pages} from "../router/pages";
import {useLocation, useParams} from "react-router-dom";
import UserList from "../components/UserList";
import UserRead from "../components/UserRead";
import {logDOM} from "@testing-library/react";

const Users = ({tasks}) => {

    const {id} = useParams()
    const {pathname} = useLocation()

    console.log('id', id)
    console.log('pathname', pathname)

    const users = [
        {id: '1', username: '1 Евгений Онегин'},
        {id: '2', username: '2 Евгений Онегин'},
        {id: '3', username: '3 Евгений Онегин'},
        {id: '4', username: '4 Евгений Онегин'},
        {id: '5', username: '5 Евгений Онегин'},
        {id: '6', username: '6 Евгений Онегин'},
        {id: '7', username: '7 Евгений Онегин'},
        {id: '8', username: '8 Евгений Онегин'},
        {id: '9', username: '9 Евгений Онегин'},
        {id: '10', username: '10 Евгений Онегин'},
        {id: '11', username: '11 Евгений Онегин'},
    ]

    const currentUser = users.find(user => user.id === id)

    return (
        <>
            <Header/>
            {/*<BoardHeader/>*/}
            {pathname === pages.users &&
            <div className="board-header">
                <div className="board-header__info">
                    <h1 className="board-header__info-title">Пользователи</h1>
                    {/*<div className="board-header__info-status status status--default">{currentTask.status}</div>*/}
                </div>
                {/*<div className="board-header__options">*/}
                {/*    <button className="board-header__options-btn button button--primary">Добавить задачу</button>*/}
                {/*</div>*/}
            </div>
            }

            {id &&
            <div className="board-header">
                <div className="board-header__info">
                    <h1 className="board-header__info-title">{currentUser.username}</h1>
                    {/*<div className="board-header__info-status status status--default">{currentUser.status}</div>*/}
                </div>
                <div className="board-header__options">
                    <button className="board-header__options-btn button button--default">Добавить задачу</button>
                    <button className="board-header__options-btn button button--primary">Редактировать</button>
                    {/*<button className="board-header__options-btn button button--error">Удалить</button>*/}
                </div>
            </div>
            }

            <div className="board">
                {pathname === pages.users && <UserList users={users}/>}
                {id && <UserRead users={users} tasks={tasks}/>}
                {/* UserAdd  */}
                {/* UserEdit */}
            </div>



        </>
    );
};

export default Users;