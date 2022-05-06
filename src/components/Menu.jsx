import React from 'react';
import {Link} from "react-router-dom";

const Menu = ({menuItems, menuActive, setMenuActive}) => {
    return (
        <div className={menuActive ? "menu menu--active" : "menu"} onClick={() => setMenuActive(false)}>
            <ul className="menu__list">
                {menuItems.map(item =>
                    <li className="menu__list-item" key={item.id}>
                        <Link to={item.to} style={{color: item.color}}>{item.value}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Menu;