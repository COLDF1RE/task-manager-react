import React, {useState} from 'react';

const TaskEdit = () => {

    const [name, setName] = useState('Задача 1. Бла бла бла')

    return (
        <>
            <div className="task-edit">
                <div className="task-edit__info">
                    <div className="task-edit__info-title">Исполнитель</div>
                    <select className="task-edit__info-select">
                        <option value="" className="">Евгений Онегин</option>
                    </select>
                    <div className="task-edit__info-title">Тип запроса</div>
                    <select className="task-edit__info-select">
                        <option value="" className="">Евгений Онегин</option>
                    </select>
                    <div className="task-edit__info-title">Приоритет</div>
                    <select className="task-edit__info-select">
                        <option value="" className="">Евгений Онегин</option>
                    </select>
                </div>

                <div className="task-edit__description">
                    <div className="task-edit__description-title">Название</div>
                    <input className="task-edit__description-input"></input>
                    <div className="task-edit__description-title">Описание</div>
                    <textarea className="task-edit__description-textarea">
{/*                        Какой-то текст задачи, например, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet consectetur dolor, nec consectetur nisl mattis ut. Proin ac sapien at elit lacinia semper. Nullam vestibulum rutrum efficitur. Sed et egestas ante, id ullamcorper ante. Maecenas porta sem ultrices libero tempus, eu laoreet turpis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed laoreet est et nisi tristique, ut hendrerit tellus pulvinar. Proin eget elit a mauris convallis molestie nec vel nisi. Etiam accumsan porta velit et convallis. Maecenas euismod scelerisque lectus, non varius velit condimentum non. Vestibulum luctus risus et metus volutpat, at sodales massa gravida.*/}
                        {/*Praesent finibus, velit ut luctus dictum, felis nibh sodales dui, nec aliquam ipsum arcu tempor ante. Aliquam gravida lorem quis egestas varius. Quisque cursus est vitae ipsum iaculis, sed convallis massa efficitur. In vestibulum, sapien et consequat luctus, arcu neque pretium justo, nec ullamcorper tortor nulla id nunc. Suspendisse eleifend gravida tortor, sit amet porta lorem posuere sed. Vivamus est neque, varius id sagittis sit amet, blandit eget odio. Fusce egestas elit nec arcu mollis mattis. In porta dapibus lectus in elementum. Nunc non varius ante. Suspendisse sit amet purus ex. Phasellus aliquet ac tortor eu mattis. Suspendisse eget lectus et massa ultricies feugiat.*/}
                    </textarea>
                </div>
            </div>
        </>
    );
};

export default TaskEdit;