import React, {useRef} from 'react';
import useOnClickOutside from "../hooks/useOnClickOutside";

const Menu = ({menuActive, setMenuActive, children, clickInsideClosesMenu}) => {

    const ref = useRef();
    useOnClickOutside(ref, () => setMenuActive(false));

    return (
        <div ref={ref} className={menuActive ? "menu menu--active" : "menu"}
             onClick={clickInsideClosesMenu ? () => setMenuActive(false) : null}>
            <ul className="menu__list">
                {children}
            </ul>
        </div>
    );
};

export default Menu;