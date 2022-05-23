import React, {useEffect} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './styles/style.scss';
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Error404 from "./pages/Error404";
import {pages} from "./router/pages";
import TaskEvent from "./components/TaskEvent";
import {events} from "./store/store";
import {observer} from "mobx-react";
import New from "./components/New/New";


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
                    <Route path={pages.tasksId} exact component={Tasks}/>
                    <Route path={pages.usersId} exact component={Users}/>
                    <Route path={pages.taskEdit} exact component={TaskEvent}/>
                    <Redirect to='/tasks'/>
                    {/*<Route component={Error404}/>*/}

                    {/*<Route path={ pages.tasksId } exact render={(props) => <Tasks tasks={ mocksTasks } {...props} />}/>*/}
                    {/*<Route path={ pages.usersId } exact render={(props) => <Users users={ mocksUsers } {...props} />}/>*/}
                </Switch>
                :
                <Switch>
                    <Route path={pages.login} exact component={Login}/>
                    <Redirect to='/login'/>
                    {/*<Route component={Error404}/>*/}
                </Switch>
            }
        </BrowserRouter>
    );
})

export default App;
