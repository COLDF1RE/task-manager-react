import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        // <div className={'user'}>
            <Link to={'/PageUserItem'} className={'user'}>{user}</Link>
            // <Link to={} className={'user__name'}>Малыш Грут</Link>
            // <Link to={} className={'user__name'}>Шерлок Холмс</Link>
            // <Link to={} className={'user__name'}>Доктор Ватсон</Link>
            // <Link to={} className={'user__name'}>Дональд Дак</Link>
        // </div>

    );
};

export default User;