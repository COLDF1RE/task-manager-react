import React from 'react';

const Dropdown = () => {
    return (

    <form>
        <h1>Dropdown Checkboxes</h1>
        <div className="dropdown">
            <label className="dropdown-label">Select Options</label>

            <div className="dropdown-list">
                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group-all" className="check-all checkbox-custom"
                           id="checkbox-main"/>
                    <label htmlFor="checkbox-main" className="checkbox-custom-label">Selection All</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group" className="check checkbox-custom"
                           id="checkbox-custom_01"/>
                    <label htmlFor="checkbox-custom_01" className="checkbox-custom-label">Selection 1</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group" className="check checkbox-custom"
                           id="checkbox-custom_02"/>
                    <label htmlFor="checkbox-custom_02" className="checkbox-custom-label">Selection 2</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group" className="check checkbox-custom"
                           id="checkbox-custom_03"/>
                    <label htmlFor="checkbox-custom_03" className="checkbox-custom-label">Selection 3</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group" className="check checkbox-custom"
                           id="checkbox-custom_04"/>
                    <label htmlFor="checkbox-custom_04" className="checkbox-custom-label">Selection 4</label>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <label className="dropdown-label">Select Options</label>

            <div className="dropdown-list">
                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group-all" className="check-all checkbox-custom"
                           id="checkbox-main1"/>
                    <label htmlFor="checkbox-main1" className="checkbox-custom-label">Selection All</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group" className="check checkbox-custom"
                           id="checkbox-custom_21"/>
                    <label htmlFor="checkbox-custom_21" className="checkbox-custom-label">Selection 1</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group" className="check checkbox-custom"
                           id="checkbox-custom_22"/>
                    <label htmlFor="checkbox-custom_22" className="checkbox-custom-label">Selection 2</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group" className="check checkbox-custom"
                           id="checkbox-custom_23"/>
                    <label htmlFor="checkbox-custom_23" className="checkbox-custom-label">Selection 3</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="dropdown-group" className="check checkbox-custom"
                           id="checkbox-custom_34"/>
                    <label htmlFor="checkbox-custom_24" className="checkbox-custom-label">Selection 4</label>
                </div>
            </div>
        </div>


        <button type="submit">кнопка</button>

    </form>
    );
};

export default Dropdown;