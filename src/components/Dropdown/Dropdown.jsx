import React, {useState} from 'react';
import './Dropdown.scss'
import Menu from "../Menu";

const Dropdown = ({change, title, values, form, inputType, clickInsideCloseMenu}) => {

    const [menuActive, setMenuActive] = useState(false)

    function dropdownName(defaultName, name) {
        if (form[name]?.length === 0) {
            return defaultName
        } else if (typeof form[name] === 'object' && form[name]?.length > 1) {
            return `Выбрано: ${form[name].length}`
        } else {
            return form[name]
        }
    }

    return (
        <fieldset className={title.className}>
            {menuActive ?
                <button className="custom-checkbox__title" onClick={() => setMenuActive(true)}>{dropdownName(title.defaultName, title.name)}</button>
                :
                <>
                <button className="custom-checkbox__title" onClick={() => setMenuActive(true)}>{dropdownName(title.defaultName, title.name)}</button>
                </>
            }
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} clickInsideClosesMenu={clickInsideCloseMenu || false}>
                {values.map(item =>
                    <li key={item.value || item.id}>
                        <label className="custom-checkbox" htmlFor={item.value || item.id}>
                            <input className="custom-checkbox__input" id={item.value || item.id} type={inputType || "checkbox"} value={item.value || item.id}
                                   onClick={change} name={title.name}/>
                            <span>{item.name || item.username}</span>
                        </label>
                    </li>
                )}
            </Menu>
        </fieldset>
    );
};

export default Dropdown;