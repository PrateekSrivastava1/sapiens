import React, { useContext, useRef } from 'react'
import "./Login.css";
import { loginCall } from "../../apiCalls"
import { Context } from '../../context/Context';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email.current.value);
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };

    // console.log(user);
    {/* <LinearProgressWithLabel value={progress} /> */ }
    return (
        <>
            <div className="loginBox">
                <div className="login">
                    <span>Sapiens</span>
                </div>
                <form className="loginBoxWrapper" onSubmit={handleSubmit}>
                    <input type="email" required placeholder='Enter your email' className="loginInput" ref={email} />
                    <input type="password" required placeholder='Enter your password' minLength="8" className="loginInput" ref={password} />
                    <button className="loginButtonn" disabled={isFetching}>{isFetching ? <LinearProgress color='success' /> : "Log In"}</button>
                    <Link to="/">forgot password?</Link>
                    <button className='registerButton'>Register</button>
                </form>
            </div>
        </>
    )
}
