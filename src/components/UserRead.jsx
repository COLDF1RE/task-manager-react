import React, {useState} from 'react';
import Pagination from "./Pagination";
import Modal from "./Modal";
import {useHistory} from "react-router-dom";
import {events} from "../store/store"

const UserRead = ({currentUser, modalActive, setModalActive}) => {

    const defaultAvatar = 'https://www.meme-arsenal.com/memes/b0f2b5f3d8ed2e0e023b216206d5e356.jpg'

    // состояние на уровне выше
    // const [modalActive, setModalActive] = useState(true)


    ////////////////////////////////// FORM ///////////////////////////////
    //
    const [ form, setForm ] = useState({
        id: currentUser.id,
        login: currentUser.login,
        username: currentUser.username,
        about: currentUser.about !== null ? currentUser.photoUrl : "",
        photoUrl: currentUser.photoUrl !== null ? currentUser.photoUrl : "",
        password: "123",
    })

    // function clearForm() {
    // setForm({
    //     theme: '',
    //     comment: '',
    //     date: newDate
    // })
    // }

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target
        setForm({...form, [name]: value})
        console.log('form editUser: ',form)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
            events.editUser({
                // id: current.id,
                ...form
                // historyBack()
            })
        console.log('submit form editUser: ', form)
    }

    const history = useHistory();
    function historyBack() {
        history.goBack()
    }

    //
    //////////////////////////////////////////////////////////

    return (
        <>
            <div className={'user-profile'}>
                <div className={'user-profile__info'}>
                    <div className={'user-profile__info-img-block'}>
                        <img src={currentUser.photoUrl ? currentUser.photoUrl : defaultAvatar} alt="avatar" className={'user-profile__info-img'}/>
                    </div>
                    <div className={'user-profile__info-title'}>О себе</div>
                    <div className={'user-profile__info-text'}>
                        {currentUser.about}
                    </div>
                </div>

                <div className={'user-profile__tasks'}>
                    <div className={'user-profile__tasks-title'}>Задачи</div>
                    <div className={'user-profile__tasks-wrap'}>
                        <div className={'user-profile__tasks-item user'}>задача 1</div>
                        <div className={'user-profile__tasks-item user'}>задача 2</div>
                        <div className={'user-profile__tasks-item user'}>задача 3</div>
                        <div className={'user-profile__tasks-item user'}>задача 4</div>
                    </div>
                    <Pagination/>
                </div>
            </div>

            <Modal modalActive={modalActive} setModalActive={setModalActive}>
                <form className="" onSubmit={handleSubmit}>
                <div className="modal__window-title">Редактирование пользователя</div>
                <div className="modal__window-body">

                    <label htmlFor="username" className="modal__window-subtitle">Имя пользователя</label>
                    <input
                        className="modal__window-input"
                        onChange={handleFieldChange}
                        name="username"
                        value={form.username}
                        required
                    />

                    <label htmlFor="photoUrl" className="modal__window-subtitle">URL фотографии</label>
                    <input
                        className="modal__window-input"
                        onChange={handleFieldChange}
                        name="photoUrl"
                        value={form.photoUrl}
                    />

                    <label htmlFor="about" className="modal__window-subtitle">О себе</label>
                    <textarea
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
};

export default UserRead;