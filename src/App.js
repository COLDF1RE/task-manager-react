import React from "react";

import './styles/style.scss';

import PageLogin from "./pages/PageLogin";
import Error404 from "./pages/Error404";
import PageTaskForm from "./pages/PageTaskForm";
import PageTaskItem from "./pages/PageTaskItem";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import PageUserItem from "./pages/PageUserItem";


import { BrowserRouter, Route, Switch } from "react-router-dom";
import { pages } from "./router/pages";
import { mocksUsers } from "./mockUsers";
import { mocksTasks } from "./mocksTasks";



function App() {
    return (
        // <div className="App">
        <BrowserRouter>
            <Switch>

                {/*<Route path={pages.login} exact={true} component={PageLogin} />*/}
                {/*<Route path={pages.tasks} exact={true} component={Tasks} />*/}
                {/*<Route path={pages.taskId} exact={true} component={PageTaskItem} />*/}
                {/*<Route path={'/PageTaskForm'} exact={true} component={PageTaskForm} />*/}

                {/*<Route path={pages.users} exact={true} component={Users} />*/}
                {/*<Route path={pages.userId} exact={true} component={PageUserItem} />*/}
                {/*<Route path={pages.userEdit} exact={true} component={PageUserItem} />*/}


                <Route path={ pages.login }     exact render={(props) => <PageLogin    tasks={ mocksTasks } {...props} />}/>
                <Route path={ pages.tasks }     exact render={(props) => <Tasks tasks={ mocksTasks } {...props} />}/>
                <Route path={ pages.taskId }    exact render={(props) => <PageTaskItem tasks={ mocksTasks } {...props} />}/>
                {/*<Route path={'/PageTaskForm'}   exact render={(props) => <PageTaskForm tasks={ mocksTasks } {...props} />}/>*/}

                {/*<Route path={ pages.users }     exact render={(props) => <Users users={ mocksUsers } {...props} />}/>*/}
                {/*<Route path={ pages.userId }    exact render={(props) => <PageUserItem users={ mocksUsers } {...props} />}/>*/}
                {/*<Route path={ pages.userEdit }  exact render={(props) => <PageUserItem users={ mocksUsers } {...props} />}/>*/}

                <Route component={Error404} />

            </Switch>
        </BrowserRouter>
        // </div>
    );
}

export default App;
