import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {pages} from "../router/pages";
import Menu from "./Menu";

const Task = ({task}) => {

    const {id, type, title, user, status, rank} = task









    // function taskMenuOpen(event) {
    //     const menuItems = document.querySelectorAll('.task__btn-img')
    //     for ( const menuItem of menuItems) {
    //         menuItem.classList.remove('task__menu--open')
    //     }
    //
    //     const item = event.target
    //     item.classList.toggle('task__menu--open')
    //     console.log(item)
    // }


    // function taskMenuOpen2 (event) {
    //     if (event.target.className != 'task__btn-img') return
    //
    //     let menu = event.target
    //     menu.classList.toggle('task__menu--open')
    // }


    const [menuActive, setMenuActive] = useState(false)
    const menuItems = [
        {id: 1, value: 'Редактировать', to: pages.tasks},
        {id: 2, value: 'Удалить', to: pages.login},
        {id: 3, value: 'На тестирование', to: pages.login},
        {id: 4, value: 'Переоткрывать', to: pages.login},
    ]


    return (
        <div className="task">
            <div className="task__img">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5Z"
                        fill={type}/>
                    <circle cx="12" cy="12" r="6" fill="white"/>
                </svg>
            </div>
            <Link to={pages.tasks + '/' + id} className="task__title">{title}</Link>
            <div className="task__username">{user}</div>
            <div className="task__status status">{status}</div>
            <div className="task__priority">
                <div className="task__priority-icon">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8L14 0L7 4L0 0L7 8Z" fill="#3CA961"/>
                    </svg>
                </div>
                <p className="task__priority-text">{rank}</p>
            </div>
            {/*<div className="task__btn" onClick={taskMenuOpen}>*/}
            <div className="task__btn">

                {/*<svg className="task__btn-active" width="20" height="20" viewBox="0 0 20 20" fill="none"*/}
                {/*     xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <path*/}
                {/*        d="M0 5C0 2.23858 2.23858 0 5 0H15C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5Z"*/}
                {/*        fill="#7B61FF"/>*/}
                {/*    <path*/}
                {/*        d="M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6H6C5.44772 6 5 5.55228 5 5Z"*/}
                {/*        fill="#F4F4F4"/>*/}
                {/*    <path*/}
                {/*        d="M5 10C5 9.44772 5.44772 9 6 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H6C5.44772 11 5 10.5523 5 10Z"*/}
                {/*        fill="#F4F4F4"/>*/}
                {/*    <path*/}
                {/*        d="M5 15C5 14.4477 5.44772 14 6 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H6C5.44772 16 5 15.5523 5 15Z"*/}
                {/*        fill="#F4F4F4"/>*/}
                {/*</svg>*/}

                <button className="task__btn-img" onClick={() => setMenuActive(!menuActive)}>ryjgrf</button>

                {/*<div className="task__menu">*/}
                {/*    <div className="task__menu-item">Редактировать</div>*/}
                {/*    <div className="task__menu-item">Удалить</div>*/}
                {/*    <div className="task__menu-item">На тестирование</div>*/}
                {/*    <div className="task__menu-item">Переоткрывать</div>*/}
                {/*</div>*/}
                <Menu menuActive={menuActive} setMenuActive={setMenuActive} menuItems={menuItems} />

            </div>
        </div>
    );
};

export default Task;