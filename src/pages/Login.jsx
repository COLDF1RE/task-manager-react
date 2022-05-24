import React from 'react';
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

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