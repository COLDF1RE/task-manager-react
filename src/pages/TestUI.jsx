import React, {useState} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Board from "../components/UI/Board/Board";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import MyButton from "../components/UI/MyButton/MyButton";
import Rank from "../components/UI/Rank";
import Status from "../components/UI/Status/Status";
import Rank2 from "../components/UI/Rank2/Rank2";
import MyInput from "../components/UI/MyInput/MyInput";
import MyTextarea from "../components/UI/MyTextarea/MyTextarea";
import Menu2 from "../components/UI/Menu2/Menu2";
import Dropdown2 from "../components/UI/Dropdown2/Dropdown2";
import Checkbox from "../components/UI/Checkbox/Checkbox";

const TestUi = () => {

    // Input & Textarea
    const [form, setForm] = useState({
        inputText: '',
        textareaText: '',
    })
    function handleFieldChange(evt) {
        const {name, value} = evt.target
        setForm({...form, [name]: value})
    }

    // Checkbox
    const type = {
        bug: "Ошибка",
        task: "Задача"
    }
    const [formFilter, setFormFilter] = useState({
        type: [],
    })
    console.log(formFilter)
    function changeFormFilter(evt){
        const {name, value} = evt.target
        if (formFilter[name].indexOf(value) === -1) {
            setFormFilter({...formFilter, [name]: [...formFilter[name], value]})
        } else {
            setFormFilter({...formFilter, [name]: formFilter[name].filter((i) => i !== value)})
        }
    }

    function getDropdownTitle (arr, defaultTitle, constsObj) {
        if (arr.length === 0) {
            return defaultTitle
        } else if (arr.length === 1){
            return constsObj[arr]
        } else {
            return `Выбрано: ${arr.length}`
        }
    }


    // Menu
    const [menuActive, setMenuActive] = useState(false)
    function toggleMenuActive() {
        setMenuActive(!menuActive)
    }
    function testMenu() {
        alert('Hello')
    }

    return (
        <>
            <Header/>
            <div className="ui-page">
                <h1 className="ui-page__title">UI TEST</h1>

                <h2 className="ui-page__subtitle">MyButton:</h2>
                <MyButton className="button--default">default</MyButton>
                <MyButton className="button--primary">primary</MyButton>
                <MyButton className="button--success">success</MyButton>
                <MyButton className="button--error">error</MyButton>
                <MyButton className="button--disabled">disabled</MyButton>

                <h2 className="ui-page__subtitle">Rank:</h2>
                <Rank2 rank={"low"}/>
                <Rank2 rank={"medium"}/>
                <Rank2 rank={"high"}/>

                <h2 className="ui-page__subtitle">Status:</h2>
                <Status status={"opened"}/>
                <Status status={"inProgress"}/>
                <Status status={"testing"}/>
                <Status status={"complete"}/>

                <h2 className="ui-page__subtitle">MyInput:{form.inputText}</h2>
                <MyInput
                    value={form.inputText}
                    change={handleFieldChange}
                    name="inputText"
                    placeholder={"Введите текст"}
                />

                <h2 className="ui-page__subtitle">MyTextarea:{form.textareaText}</h2>
                <MyTextarea
                    value={form.textareaText}
                    change={handleFieldChange}
                    name="textareaText"
                    placeholder={"Введите текст"}
                />


                <h2 className="ui-page__subtitle">Checkbox: { formFilter.type }</h2>
                {Object.entries(type).map(([key, value]) =>
                    <Checkbox
                        key={key}
                        value={key}
                        title={value}
                        checkedItems={formFilter.type}
                        change={changeFormFilter}
                        name="type"
                    />
                )}


                <h2 className="ui-page__subtitle">Dropdown:</h2>
                <Dropdown2
                    title={
                        <div>Название</div>
                    }
                    body={
                        <>
                            <div className="dropdown__list-item">1</div>
                            <div className="dropdown__list-item">2</div>
                            <div className="dropdown__list-item">3</div>
                        </>
                    }
                />

                <h2 className="ui-page__subtitle">Dropdown with checkbox: { formFilter.type }</h2>
                <Dropdown2
                    title={
                        getDropdownTitle(formFilter.type, 'Тип', type)
                    }
                    body={
                        Object.entries(type).map(([key, value]) =>
                            <Checkbox
                                key={key}
                                value={key}
                                title={value}
                                checkedItems={formFilter.type}
                                change={changeFormFilter}
                                name="type"
                            />
                        )
                    }
                />

                <h2 className="ui-page__subtitle">Menu:</h2>
                <div style={{'position': 'relative', 'width': '136px'}}>
                    <svg
                        onClick={toggleMenuActive} className="task__btn-img" width="20" height="20" viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 5C0 2.23858 2.23858 0 5 0H15C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5Z"
                            fill={menuActive ? '#7B61FF' : 'transparent'}/>
                        <path
                            d="M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6H6C5.44772 6 5 5.55228 5 5Z"
                            fill={menuActive ? '#F4F4F4' : '#7B61FF'}/>
                        <path
                            d="M5 10C5 9.44772 5.44772 9 6 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H6C5.44772 11 5 10.5523 5 10Z"
                            fill={menuActive ? '#F4F4F4' : '#7B61FF'}/>
                        <path
                            d="M5 15C5 14.4477 5.44772 14 6 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H6C5.44772 16 5 15.5523 5 15Z"
                            fill={menuActive ? '#F4F4F4' : '#7B61FF'}/>
                    </svg>

                    <Menu2 menuActive={menuActive} style="top: 20px">
                        <li>
                            <a onClick={testMenu} className="menu__list-item">Кнопка 1</a>
                        </li>
                        <li>
                            <button onClick={testMenu} className="menu__list-item">Кнопка 2</button>
                        </li>
                    </Menu2>
                </div>


            </div>
            <Footer/>
        </>
    );
};

export default TestUi;