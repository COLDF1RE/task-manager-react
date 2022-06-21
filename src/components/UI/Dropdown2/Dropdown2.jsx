import React, {useState} from 'react';
import './Dropdown2.scss'

const Dropdown2 = ({title, body}) => {

    const [isActive, setIsActive] = useState(false)
    function toggle() {
        setIsActive(!isActive)
    }

    return (
        <div className="dropdown">
            <button  onClick={toggle} className={isActive ? 'dropdown__button dropdown__button--active' : 'dropdown__button'}>
                {title}
            </button>
            {isActive &&
                <div className="dropdown__list">
                    {body}
                </div>
            }

        </div>
    );
};

export default Dropdown2;