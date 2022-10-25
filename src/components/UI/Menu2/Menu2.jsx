import React from 'react';
import './Menu2.scss'

const Menu = ({children, menuActive}) => {
    return (
        <div className={menuActive ? 'menu menu--active' : 'menu'}>
            <ul className="menu__list">
                {children}
            </ul>
        </div>
    );
};

export default Menu;