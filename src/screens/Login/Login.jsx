import React from "react";
import BtnContainer from "../../components/Login/BtnContainer/BtnContainer";
import LoginTitle from "../../components/Login/LoginTitle/LoginTitle";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import LoginImg from "../../components/Login/LoginImg/LoginImg";
import "../../components/Login/Login.css";

const Login = () => {
    return (
        <div className="container login-container">
            <div className="row mt-5 p-4">
                <div className="mb-3 col-lg-12 col-xl-7 order-xl-last d-flex justify-content-center align-items-start">
                    <LoginImg/>
                </div>
                <div className="login-form col-lg-12 order-xl-first col-xl-5 p-5  d-flex flex-column form-change">
                    <BtnContainer/>
                    <LoginTitle/>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};

export default Login;
