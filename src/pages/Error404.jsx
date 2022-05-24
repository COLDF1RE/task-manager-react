import React from 'react';
import {pages} from "../router/pages"
import {Link} from "react-router-dom";

const Error404 = () => {

    return (
        <div className={"error404"}>
            <h2 className={"error404__title"}>Упс!</h2>
            <h4 className={"error404__subtitle"}>Похоже, это не то, что вы искали.</h4>
            <Link to={pages.tasks} className={"error404__link"}>Вернуться на <span>главную</span></Link>
        </div>
    );
};

export default Error404;