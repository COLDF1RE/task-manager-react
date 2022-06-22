import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import {pages} from "../router/pages";
import {Link, useLocation, useParams} from "react-router-dom";
import BoardUserList from "../components/BoardUserList/BoardUserList";
import BoardUserOpen from "../components/BoardUserOpen/BoardUserOpen";
import {observer} from "mobx-react";
import {events} from "../store/store";
import Footer from "../components/Footer/Footer";
import Board from "../components/UI/Board/Board";
import BoardHeader from "../components/BoardHeader/BoardHeader";
import MyButton from "../components/UI/MyButton/MyButton";


const Users = observer(() => {

    const {id} = useParams()
    const {pathname} = useLocation()
    const users = events.users || []
    const currentUser = events.users.find(user => user.id === id) || []

    useEffect(()=>{
        events.fetch()
    }, [])

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className="wrapper">
            <Header/>
            <div className="main">
                {/*/////////////////////////// USERS /////////////////////////*/}
                {pathname === pages.users &&
                <>
                    <BoardHeader title={<h1 className="board-header__info-title">Пользователи</h1>}/>
                    <Board>
                        <BoardUserList users={users}/>
                    </Board>
                </>
                }

                {/*////////////////////////// USER-OPEN /////////////////////*/}
                {id &&
                <>
                    <BoardHeader
                        title={<h1 className="board-header__info-title">{currentUser.username}</h1>}
                        buttons={
                            <>
                            <MyButton className="board-header__options-btn button--default">
                                <Link to={pages.taskAdd} >Добавить задачу</Link>
                            </MyButton>
                            <MyButton className="board-header__options-btn button--primary" onClick={() => setModalActive(true)}>
                                Редактировать
                            </MyButton>
                            </>
                        }
                    />

                    {/*<section className="board-header">*/}
                    {/*    <div className="board-header__info">*/}
                    {/*        <h1 className="board-header__info-title">{currentUser.username}</h1>*/}
                    {/*    </div>*/}
                    {/*    <div className="board-header__options">*/}
                    {/*        <Link to={pages.taskAdd} className="board-header__options-btn button button--default">Добавить задачу</Link>*/}
                    {/*        <button className="board-header__options-btn button button--primary"*/}
                    {/*                onClick={() => setModalActive(true)}>Редактировать*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</section>*/}

                    <Board>
                        <BoardUserOpen currentUser={currentUser} modalActive={modalActive} setModalActive={setModalActive}/>
                    </Board>
                </>
                }
            </div>
            <Footer/>
        </div>
    );
});

export default Users;