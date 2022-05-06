import React from 'react';
import {Link} from "react-router-dom";
import {pages} from "../router/pages";

const User = ({user}) => {

    return (
            <Link to={pages.users + '/' + user.id} className={'user'}>{user.username}</Link>
    );
};

export default User;