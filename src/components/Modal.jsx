import React from 'react';

const Modal = ({modalActive, setModalActive, children}) => {

    return (
        <div className={modalActive ? "modal modal--active" : "modal"} onClick={() => setModalActive(false)}>
            <div className="modal__window" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;