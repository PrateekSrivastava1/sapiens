import React from 'react'
import "./Register.css";

export default function Register() {
    return (
        <>
            <div className="registerBox">
                <div className="registerBoxWrapper">
                    <input type="text" placeholder='Enter your username' className="registerInput" />
                    <input type="email" placeholder='Enter your email' className="registerInput" />
                    <input type="password" placeholder='Enter your password' className="registerInput" />
                    <input type="password" placeholder='Enter your password again' className="registerInput" />
                    <button className='signupButton'>Signup</button>
                    <button className='loginButton'>Login</button>
                </div>
            </div>
        </>
    )
}
