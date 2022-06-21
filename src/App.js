import React, {useEffect} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './styles/style.scss';
import Login from "./pages/Login";
import TasksOld from "./pages/TasksOld";
import Users from "./pages/Users";
import Error404 from "./pages/Error404";
import {pages} from "./router/pages";
import TaskEvent from "./pages/TaskEvent";
import {events} from "./store/store";
import {observer} from "mobx-react";
import Tasks from "./pages/Tasks";
import TaskOpen from "./pages/TaskOpen";
import TestUi from "./pages/TestUI";


const App = observer(() => {

    console.log('auth: ', events.auth)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            events.authOn()
        }
    }, [])

    return (
        <BrowserRouter>
            {events.auth
                ?
                <Switch>
                    <Route path={pages.tasks} exact component={Tasks}/>
                    <Route path={pages.tasksId} exact component={TaskOpen}/>
                    <Route path={pages.taskEdit} exact component={TaskEvent}/>
                    <Route path={pages.usersId} exact component={Users}/>
                    <Route path={pages.testUI} exact component={TestUi}/>
                    <Route component={Error404}/>
                    {/*<Redirect to='/tasks'/>*/}
                    {/*<Route path={ pages.tasksId } exact render={(props) => <TasksOld tasks={ mocksTasks } {...props} />}/>*/}
                </Switch>
                :
                <Switch>
                    <Route path={pages.login} exact component={Login}/>
                    <Route component={Error404}/>
                    {/*<Redirect to='/login'/>*/}
                </Switch>
            }
        </BrowserRouter>
    );
})

export default App;
