import React, {useState} from 'react';
import Pagination from "./UI/Pagination";
import Modal from "./Modal";
import {useHistory} from "react-router-dom";
import {events} from "../store/store"
import Task from "./Task";
import {observer} from "mobx-react";
import usePagination from "../hooks/usePagination";
import EmptyList from "./EmptyList";


const BoardUserOpen = observer(({currentUser, modalActive, setModalActive}) => {

    const defaultAvatar = 'https://mustact.by/img/empty/artist.avatar.png'
    const tasks = events.tasks.data || []
    const userTasks = tasks.filter(task => task.assignedId === currentUser.id) || [];

    ///////////////////////////// PAGINATION /////////////////////////
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
        count: userTasks ? userTasks.length : '',
        // count: events ? events.data.total : '',
    });

    //////////////////////////////// FORM ///////////////////////////////
    const [ form, setForm ] = useState({
        id: currentUser.id,
        login: currentUser.login,
        username: currentUser.username,
        about: currentUser.about !== null ? currentUser.about : "",
        photoUrl: currentUser.photoUrl !== null ? currentUser.photoUrl : "",
        password: "123",
    })

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target
        setForm({...form, [name]: value})
        console.log('form editUser: ',form)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        events.editUser(form)
        localStorage.setItem('userPhotoUrl', form.photoUrl)
        setModalActive(false)
        console.log('submit form editUser: ', form)
    }

    const history = useHistory();
    function historyBack() {
        history.goBack()
    }

    return (
        <>
            <div className={'user-profile'}>
                <div className={'user-profile__info'}>
                    <div className={'user-profile__info-img-block'}>
                        <img src={currentUser.photoUrl ? currentUser.photoUrl : defaultAvatar} alt="avatar" className={'user-profile__info-img'}/>
                    </div>
                    <h3 className={'user-profile__info-title'}>О себе</h3>
                    <p className={'user-profile__info-text'}>{currentUser.about}</p>
                </div>

                <div className={'user-profile__tasks'}>
                    <h3 className={'user-profile__tasks-title'}>Задачи</h3>
                    <div className={'user-profile__tasks-wrap'}>
                        {userTasks.length ?
                            userTasks.slice(firstContentIndex, lastContentIndex)
                                .map(task =>
                                    <Task task={task} key={task.id}/>
                                )
                            :
                            <EmptyList/>
                        }
                    </div>
                    <Pagination
                        nextPage={nextPage}
                        prevPage={prevPage}
                        tasksLength={userTasks.length}
                        firstContentIndex={firstContentIndex}
                        lastContentIndex={lastContentIndex}
                        totalPages={totalPages}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </div>

            <Modal modalActive={modalActive} setModalActive={setModalActive}>
                <form className="" onSubmit={handleSubmit}>
                <h3 className="modal__window-title">Редактирование пользователя</h3>
                <div className="modal__window-body">

                    <label htmlFor="username" className="modal__window-subtitle">Имя пользователя</label>
                    <input
                        id="username"
                        className="modal__window-input"
                        onChange={handleFieldChange}
                        name="username"
                        value={form.username}
                        required
                    />

                    <label htmlFor="photoUrl" className="modal__window-subtitle">URL фотографии</label>
                    <input
                        id="photoUrl"
                        className="modal__window-input"
                        onChange={handleFieldChange}
                        name="photoUrl"
                        value={form.photoUrl}
                    />

                    <label htmlFor="about" className="modal__window-subtitle">О себе</label>
                    <textarea
                        id="about"
                        className="modal__window-textarea"
                        onChange={handleFieldChange}
                        name="about"
                        value={form.about}
                    />

                </div>
                <div className="modal__window-buttons">
                    <button className="modal__window-submit button button--primary">Добавить</button>
                    <button className="modal__window-cancel button button-default" onClick={()=>setModalActive(false)}>Отмена</button>
                </div>
                </form>
            </Modal>
        </>
    );
});

export default BoardUserOpen;