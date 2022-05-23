import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import BoardHeader from "../components/Board-header";
import {pages} from "../router/pages";
import {Link, useLocation, useParams} from "react-router-dom";
import UserList from "../components/UserList";
import UserRead from "../components/UserRead";
import {observer} from "mobx-react";
import {events} from "../store/store";


const Users = observer(() => {

    const {id} = useParams()
    const {pathname} = useLocation()
    const users = events.users || []
    const currentUser = events.users.find(user => user.id === id) || []
    const tasks = []

    useEffect(()=>{
        events.fetch()
    }, [])

    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <Header />
            {/*<BoardHeader/>*/}
            {/*/////////////////////////// USERS /////////////////////////*/}
            {pathname === pages.users &&
            <>
                <div className="board-header">
                    <div className="board-header__info">
                        <h1 className="board-header__info-title">Пользователи</h1>
                    </div>
                </div>

                <div className="board">
                    <UserList users={users}/>
                </div>
            </>
            }

            {/*////////////////////////// USER-READ /////////////////////*/}
            {id &&
            <>
                <div className="board-header">
                    <div className="board-header__info">
                        <h1 className="board-header__info-title">{currentUser.username}</h1>
                    </div>
                    <div className="board-header__options">
                        <Link to={pages.taskAdd} className="board-header__options-btn button button--default">Добавить задачу</Link>
                        <button className="board-header__options-btn button button--primary"
                                onClick={() => setModalActive(true)}>Редактировать
                        </button>
                    </div>
                </div>
                <div className="board">
                    <UserRead currentUser={currentUser} tasks={tasks} modalActive={modalActive}
                              setModalActive={setModalActive}/>
                </div>

            </>
            }

        </>
    );
});

export default Users;