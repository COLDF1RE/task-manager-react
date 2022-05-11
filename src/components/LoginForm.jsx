import React from 'react';
import {Link} from "react-router-dom";
import {pages} from "../router/pages";


const LoginForm = () => {



    return (
        <>
            <form className="login">
                <div className="login__title">Авторизация</div>

                <label className="login__input-title">Логин</label>
                <input type="text" className="login__input"/>

                <label className="login__input-title">Логин</label>
                <input type="password" className="login__input"/>

                <Link to={pages.tasks} className="login__btn button button--success">Вход</Link>
            </form>
        </>
    );
};

export default LoginForm;