import React, { useRef } from 'react'
import "./Login.css";

export default function Login() {
    const email = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="loginBox">
                <form className="loginBoxWrapper" onSubmit={handleSubmit}>
                    <input type="email" required placeholder='Enter your email' className="loginInput" ref={email} />
                    <input type="password" required placeholder='Enter your password' minLength="8" className="loginInput" ref={password} />
                    <button className="loginButton">Login</button>
                    <button className='registerButton'>Register</button>
                </form>
            </div>
        </>
    )
}
