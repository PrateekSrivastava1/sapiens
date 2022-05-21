import React from 'react'
import "./Login.css";

export default function Login() {
    return (
        <>
            <div className="loginBox">
                <div className="loginBoxWrapper">
                    <input type="email" placeholder='Enter your email' className="loginInput" />
                    <input type="password" placeholder='Enter your password' className="loginInput" />
                    <button className='loginButton'>Login</button>
                    <button className='registerButton'>Register</button>
                </div>
            </div>
        </>
    )
}
