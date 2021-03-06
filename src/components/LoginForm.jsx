import React, {useState} from 'react';
import {events} from "../store/store";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react";


const LoginForm = () => {

    const [loginForm, setLoginForm] = useState({
        login: '',
        password: ''
    })

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target
        setLoginForm({...loginForm, [name]: value})
    }

    async function handleSubmit (evt) {
        evt.preventDefault()
        await events.loginUser(loginForm)
        await redirectTo("/tasks")
    }

    const history = useHistory();
    function redirectTo(path) {
        if (events.auth) {
            history.push(path);
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <div className="login__title">Авторизация</div>

            <label className="login__input-title">Логин</label>
            <input onChange={handleFieldChange} value={loginForm.login} name={'login'} required type="text"
                   className="login__input"/>

            <label className="login__input-title">Пароль</label>
            <input onChange={handleFieldChange} value={loginForm.password} name={'password'} required type="password"
                   className="login__input"/>

            <button type="submit" className="login__btn button button--success">Вход</button>
        </form>
    );
};

export default LoginForm;