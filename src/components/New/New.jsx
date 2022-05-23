import React, {useState} from 'react';
// import './New.scss'
import './New2.scss'
import Menu from "../Menu";

const New = () => {

    const [form, setForm] = useState({
        key1: '',
        key2: '',
        key3: '',
        key4: '',
        key5: '',
    })

    function change(evt) {
        const {name, value} = evt.target
        if (form[name].indexOf(value) === -1) {
            setForm({...form, [name]: [...form[name], value]})
        } else {
            // setForm({...form, [name]: form[name].splice(form[name].indexOf(value), 1)})
            setForm({...form, [name]: form[name].filter((i) => i !== value)})
        }
    }


    console.log(form)


    function selectName(defaultName, name) {
        if (form[name]?.length === 0) {
            return defaultName
        } else if (form[name]?.length === 1) {
            return form[name]
        } else if (form[name]?.length > 1) {
            return `Выбрано: ${form[name].length}`
        }
    }

    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            {/*<div style={{display: 'flex', flexDirection: 'column', padding: '100px'}}>*/}

            <fieldset style={{position: 'relative'}}>
                {menuActive ?
                    <div onClick={() => setMenuActive(true)}>{selectName('Тип', 'key1')}</div>
                    :
                    <>
                        <div onClick={() => setMenuActive(true)}>{selectName('Тип', 'key1')}</div>
                    </>
                }

                <Menu menuActive={menuActive} setMenuActive={setMenuActive} clickInsideClosesMenu={false}>

                    <li>
                        <label className="custom-checkbox" htmlFor="key1">
                            <input className="custom-checkbox__input" id="key1" type="checkbox" value="Значение 1"
                                   onClick={change} name="key1"/>
                            <span>Ключ 1</span>
                        </label>
                    </li>

                    <li>
                        <label className="custom-checkbox" htmlFor="key2">
                            <input className="custom-checkbox__input" id="key2" type="checkbox" value="Значение 2"
                                   onClick={change} name="key1"/>
                            <span>Ключ 1</span>
                        </label>
                    </li>

                    <li>
                        <label className="custom-checkbox" htmlFor="key3">
                            <input className="custom-checkbox__input" id="key3" type="checkbox" value="Значение 3"
                                   onClick={change} name="key1"/>
                            <span>Ключ 1</span>
                        </label>
                    </li>
                </Menu>
            </fieldset>


            {/*<div>{selectName('Статус','key2')}</div>*/}
            {/*<label className="custom-checkbox" htmlFor="status1">*/}
            {/*    <input className="custom-checkbox__input" id="status1" type="checkbox" value="Значение 1"*/}
            {/*           onClick={change} name="key2"/>*/}
            {/*    <span>Ключ 1</span>*/}
            {/*</label>*/}

            {/*<label className="custom-checkbox" htmlFor="status2">*/}
            {/*    <input className="custom-checkbox__input" id="status2" type="checkbox" value="Значение 2"*/}
            {/*           onClick={change} name="key2"/>*/}
            {/*    <span>Ключ 1</span>*/}
            {/*</label>*/}

            {/*<label className="custom-checkbox" htmlFor="status3">*/}
            {/*    <input className="custom-checkbox__input" id="status3" type="checkbox" value="Значение 3"*/}
            {/*           onClick={change} name="key2"/>*/}
            {/*    <span>Ключ 1</span>*/}
            {/*</label>*/}


            {/*</div>*/}

        </>
    );
};

export default New;