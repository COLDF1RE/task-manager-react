import React from 'react';
import Pagination from "./Pagination";
import Modal from "./Modal";

const UserRead = () => {
    return (
        <>

            {/*<Modal/>*/}

            <div className={'user-profile'}>
                <div className={'user-profile__info'}>
                    <div className={'user-profile__info-img'}>

                    </div>
                    <div className={'user-profile__info-title'}>О себе</div>
                    <div className={'user-profile__info-text'}>
                        Разработчик.
                        Реалист.
                        Очаровательное маленькое дерево.
                    </div>
                </div>

                <div className={'user-profile__tasks'}>
                    <div className={'user-profile__tasks-title'}>Задачи</div>
                    <div className={'user-profile__tasks-wrap'}>
                        <div className={'user-profile__tasks-item user'}>задача 1</div>
                        <div className={'user-profile__tasks-item user'}>задача 2</div>
                        <div className={'user-profile__tasks-item user'}>задача 3</div>
                        <div className={'user-profile__tasks-item user'}>задача 4</div>
                    </div>
                    <Pagination/>
                </div>
            </div>

        </>
    );
};

export default UserRead;