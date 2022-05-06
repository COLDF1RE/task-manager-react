import React from 'react';
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import {getFilteredTasks} from "../API/api";

const Login = () => {

    return (
        <>
            <Header/>
            {/*<HeaderLite/>*/}
            <LoginForm/>
        </>
    );
};

export default Login;