import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {pages} from "../../router/pages";
import {events} from "../../store/store";
import Menu from "../UI/Menu";
import Rank from "../UI/Rank";
import './Task.scss'
import Status from "../UI/Status/Status";
import Rank2 from "../UI/Rank2/Rank2";

const Task = ({task, username}) => {

    const {id, type, title, userId, status, rank} = task
    const [menuActive, setMenuActive] = useState(false)
    const opened = [{value: 'inProgress', name: 'Взять в работу'}, {value: 'complete', name: 'Отметить как выполненное'}]
    const inProgress = [{value: 'opened', name: 'Заново открыть'}, {value: 'testing', name: 'Взять на тестирование'}, {value: 'complete', name: 'Отметить как выполненное'}]
    const testing = [{value: 'opened', name: 'Заново открыть'}, {value: 'complete', name: 'Отметить как выполненное'}]
    const complete = [{value: 'opened', name: 'Заново открыть'}]

    function deleteTask() {
        events.deleteTask(id)
    }

    function changeStatusTask(evt) {
        const status = evt.target.value
        events.changeStatusTask(id, status)
    }

    return (
        <div className="task">
            <div className="task__img">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5Z"
                        fill={type === 'task' ? '#00D1FF' : '#EB4F4F'}/>
                    <circle cx="12" cy="12" r="6" fill="white"/>
                </svg>
            </div>
            <Link to={pages.tasks + '/' + id} className="task__title">{title} </Link>
            <div className="task__username">{username}</div>

            <div className="task__status">
                <Status status={status}/>
                {/*{status === 'opened' && <div className="task__status-item status status--default">Открыто</div>}*/}
                {/*{status === 'inProgress' && <div className="task__status-item status status--yellow">В Работе</div>}*/}
                {/*{status === 'testing' && <div className="task__status-item status status--yellow">Тестирование</div>}*/}
                {/*{status === 'complete' && <div className="task__status-item status status--green">Сделано</div>}*/}
            </div>

            <Rank2 rank={rank}/>
            {/*<Rank rank={rank}/>*/}

            <div className="task__btn">
                {/* Особенность хука useOnClickOutside - повторное нажатие на кнопку открытия меню не приводит к его закрытию)
                фиксируется 2-ое нажатие - закрывает и сразу открывает вновь. Перепробовал 5-6 других реализаций - тоже самое.
                В качестве временного решения написал код ниже. Он еще может встретится в других компонентах порядка 2 раз
                */}
                {menuActive ?
                    <svg className="task__btn-img" width="20" height="20" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 5C0 2.23858 2.23858 0 5 0H15C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5Z"
                            fill={menuActive ? "#7B61FF" : "transparent"}/>
                        <path
                            d="M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6H6C5.44772 6 5 5.55228 5 5Z"
                            fill={menuActive ? "#F4F4F4" : "#7B61FF"}/>
                        <path
                            d="M5 10C5 9.44772 5.44772 9 6 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H6C5.44772 11 5 10.5523 5 10Z"
                            fill={menuActive ? "#F4F4F4" : "#7B61FF"}/>
                        <path
                            d="M5 15C5 14.4477 5.44772 14 6 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H6C5.44772 16 5 15.5523 5 15Z"
                            fill={menuActive ? "#F4F4F4" : "#7B61FF"}/>
                    </svg>
                    :
                    <>
                    <svg onClick={() => setMenuActive(true)} className="task__btn-img" width="20" height="20" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 5C0 2.23858 2.23858 0 5 0H15C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5Z"
                            fill={menuActive ? "#7B61FF" : "transparent"}/>
                        <path
                            d="M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6H6C5.44772 6 5 5.55228 5 5Z"
                            fill={menuActive ? "#F4F4F4" : "#7B61FF"}/>
                        <path
                            d="M5 10C5 9.44772 5.44772 9 6 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H6C5.44772 11 5 10.5523 5 10Z"
                            fill={menuActive ? "#F4F4F4" : "#7B61FF"}/>
                        <path
                            d="M5 15C5 14.4477 5.44772 14 6 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H6C5.44772 16 5 15.5523 5 15Z"
                            fill={menuActive ? "#F4F4F4" : "#7B61FF"}/>
                    </svg>
                    </>
                }

                <Menu menuActive={menuActive} setMenuActive={setMenuActive} clickInsideClosesMenu={true}>
                    {userId === localStorage.getItem('userId') &&
                    <>
                        <li><Link className="menu__list-item" to={pages.taskAdd + id} >Редактировать</Link></li>
                        <li><button className="menu__list-item" onClick={deleteTask}>Удалить</button></li>
                    </>
                    }
                    {status === 'opened' && opened.map(item =>
                        <li key={item.value}><button onClick={changeStatusTask} value={item.value} className="menu__list-item">{item.name}</button></li>
                    )}
                    {status === 'inProgress' && inProgress.map(item =>
                        <li key={item.value}><button onClick={changeStatusTask} value={item.value} className="menu__list-item">{item.name}</button></li>
                    )}
                    {status === 'testing' && testing.map(item =>
                        <li key={item.value}><button onClick={changeStatusTask} value={item.value} className="menu__list-item">{item.name}</button></li>
                    )}
                    {status === 'complete' && complete.map(item =>
                        <li key={item.value}><button onClick={changeStatusTask} value={item.value} className="menu__list-item">{item.name}</button></li>
                    )}
                </Menu>
            </div>
        </div>
    );
};

export default Task;