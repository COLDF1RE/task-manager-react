import React from 'react';
import './Checkbox.scss'

const Checkbox = ({value, title, inputType, onChange, name, checkedItems}) => {
    return (
        <div>
            <label className="custom-checkbox">
                <input
                    className="custom-checkbox__input"
                    type={inputType || 'checkbox'}
                    value={value}
                    onChange={onChange}
                    name={name}

                />
                <span>{title}</span>
            </label>
        </div>
    );
};

export default Checkbox;