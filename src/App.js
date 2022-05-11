import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './styles/style.scss';

import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Error404 from "./pages/Error404";

import { pages } from "./router/pages";
import { mocksUsers } from "./mockUsers";
import { mocksTasks } from "./mocksTasks";



function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ pages.login }   exact render={(props) => <Login tasks={ mocksTasks } {...props} />}/>
                <Route path={ pages.tasksId } exact render={(props) => <Tasks tasks={ mocksTasks } {...props} />}/>
                <Route path={ pages.usersId } exact render={(props) => <Users users={ mocksUsers } {...props} />}/>

                <Route component={ Error404 } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;