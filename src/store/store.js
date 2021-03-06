import {makeAutoObservable} from "mobx";
import {
    createOrEditTask,
    deleteTask,
    changeStatusTask,
    changeWorkTimeTask,
    createOrEditComment,
    deleteComment,
    editUser,
    loginUser,
    getAllUsers,
    getFilteredTasks,
    getComments,
} from "../api/api";


class EventsStore {
    auth = false
    login = []
    tasks = [];
    users = [];
    comments = [];

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });
    }

    * fetch(body) {
        const responseTasks = yield getFilteredTasks(body);
        this.tasks = responseTasks

        const responseUsers = yield getAllUsers();
        this.users = responseUsers
    }

    * loginUser(body) {
        const response = yield loginUser(body)
        this.login = response
        if (!!this.login.id) {
            this.authOn()
            localStorage.setItem('auth', 'true')
            localStorage.setItem('userId', this.login.id)
            localStorage.setItem('username', this.login.username)
            localStorage.setItem('userPhotoUrl', this.login.photoUrl)
        }
    }

    authOn() {
        this.auth = true
    }

    authOff() {
        this.auth = false
    }

    * createOrEditTask(body) {
        yield createOrEditTask(body)
        yield this.fetch();
    }

    * deleteTask(taskId) {
        yield deleteTask(taskId);
        yield this.fetch();
    }

    * changeStatusTask(taskId, status) {
        yield changeStatusTask(taskId, status);
        yield this.fetch();
    }

    * editUser(body) {
        yield editUser(body);
        yield this.fetch();
    }

    * getComments(taskId) {
         const response = yield getComments(taskId)
         this.comments = response
    }

    * createOrEditComment(body) {
        yield createOrEditComment(body)
    }

    * deleteComment(commentId) {
        yield deleteComment(commentId)
    }

    * changeWorkTimeTask(taskId, body) {
        yield changeWorkTimeTask(taskId, body)
        yield this.fetch();
    }
}

export const events = new EventsStore();
