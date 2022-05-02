import React from 'react';
import {Link} from "react-router-dom";
import {pages} from "../router/pages";


const LoginForm = () => {
    return (
        <>
            <div className="authorization">
                {/*СДЕЛАТЬ ФОРМ*/}
                <div className="authorization__title">Авторизация</div>
                <div className="authorization__input-title">Логин</div>
                <input type="text" className="authorization__input"/>
                <div className="authorization__input-title">Логин</div>
                <input type="text" className="authorization__input"/>

                <Link to={pages.tasks} className="authorization__btn">Вход</Link>
            </div>
        </>
    );
};

export default LoginForm;