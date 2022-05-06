import React from 'react';

const Modal = () => {
    return (
        <>
            <div className="modal">
                <div className="modal__window">
                    <div className="modal__window-title">Запись о работе</div>
                    <div className="modal__window-body">
                        <div className="modal__window-subtitle">Затраченное время</div>
                        <input className="modal__window-input"></input>
                        <div className="modal__window-subtitle">Единицы измерения</div>
                        <select className="modal__window-select">
                            <option value="" className="">Минуты</option>
                        </select>
                        <div className="modal__window-subtitle">Комментарии</div>
                        <textarea className="modal__window-textarea"></textarea>
                    </div>
                    <div className="modal__window-buttons">
                        <button className="modal__window-submit button button--primary">Добавить</button>
                        <button className="modal__window-cancel button button-default">Отмена</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;