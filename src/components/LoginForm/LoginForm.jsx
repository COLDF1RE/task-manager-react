import React, {useState} from 'react';
import {events} from "../../store/store";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react";
import './LoginForm.scss'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";


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
            <MyInput
                onChange={handleFieldChange}
                value={loginForm.login}
                name={'login'}
                type="text"
                className="login__input"
            />

            <label className="login__input-title">Пароль</label>
            <MyInput
                onChange={handleFieldChange}
                value={loginForm.password}
                name={'password'}
                type="password"
                className="login__input"
            />

            <MyButton type="submit" className="login__btn button button--success">Вход</MyButton>
        </form>
    );
};

export default LoginForm;