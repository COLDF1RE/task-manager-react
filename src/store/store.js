import {computed, makeAutoObservable, onBecomeObserved} from "mobx";
import {addTask, changeWorkTimeTask, editTask, editUser} from "../API/api";
import moment from 'moment';

import {getAllUsers, getFilteredTasks} from "../API/api";
import {getComments} from "../API/api";
import {useParams} from "react-router-dom";


class EventsStore {
    tasks = [];
    users = [];
    comments = [];

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
            // data: computed,
        });

        onBecomeObserved(this, 'tasks', this.fetch);
    }

    * fetch(taskId) {
        const responseTasks = yield getFilteredTasks();
        this.tasks = responseTasks

        const responseUsers = yield getAllUsers();
        this.users = responseUsers

        if (taskId) {
            const responseComments = yield getComments(taskId);
            this.comments = responseComments
        }
    }

    * addTask(data) {
        yield addTask(data)
        yield this.fetch();
    }

    * editTask(data) {
        yield editTask(data);
        yield this.fetch();
    }

    * editUser(data) {
        yield editUser(data);
        yield this.fetch();
    }

    * getComments(taskId) {
        yield getComments(taskId)
        yield this.fetch(taskId);
    }

    * changeWorkTimeTask(taskId, body) {
        yield changeWorkTimeTask(taskId, body)
        // yield this.fetch();
    }
}

export const events = new EventsStore();
