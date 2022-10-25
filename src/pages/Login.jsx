import React from 'react';
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm/LoginForm";
import Footer from "../components/Footer/Footer";

const Login = () => {

    return (
        <div className="wrapper">
            <Header/>
            <div className="main">
                <LoginForm/>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;