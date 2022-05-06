import React from 'react';
import {Link} from "react-router-dom";
import {pages} from "../router/pages";


const LoginForm = () => {
    return (
        <>
            <div className="login">
                {/*СДЕЛАТЬ ФОРМ*/}
                <div className="login__title">Авторизация</div>
                <div className="login__input-title">Логин</div>
                <input type="text" className="login__input"/>
                <div className="login__input-title">Логин</div>
                <input type="text" className="login__input"/>

                <Link to={pages.tasks} className="login__btn button button--success">Вход</Link>
            </div>
        </>
    );
};

export default LoginForm;