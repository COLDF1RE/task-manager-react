import React from 'react';
import {pages} from "../../router/pages"
import {Link} from "react-router-dom";
import {events} from "../../store/store";
import './Error404.scss'

const Error404 = () => {

    return (
        <div className={"error404"}>
            <h2 className={"error404__title"}>Упс!</h2>
            <h4 className={"error404__subtitle"}>Похоже, это не то, что вы искали.</h4>
            <Link to={events.auth ? pages.tasks : pages.login} className={"error404__link"}>Вернуться на <span>{events.auth ? 'главную' : 'страницу авторизации'}</span></Link>
        </div>
    );
};

export default Error404;