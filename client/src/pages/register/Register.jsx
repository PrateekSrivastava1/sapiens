import React, { useRef } from 'react'
import "./Register.css";
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (/@bbdu.ac.in\s*$/.test(email.current.value)) {
            console.log("it ends in @bbdu.ac.in");
            if (passwordAgain.current.value !== password.current.value) {
                passwordAgain.current.setCustomValidity("Password don't match, please try again :)");
            }
            else {
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                }
                try {
                    await axios.post("/auth/register", user);
                    navigate("/login");
                } catch (err) {
                    console.log(err);
                }
            }
        }
        else {
            email.current.setCustomValidity("please enter email with bbdu.ac.in domain");
        }
    }

    return (
        <>
            <div className="registerBox">
                <div className="register">
                    <span>Sapiens</span>
                </div>
                <form className="registerBoxWrapper" onSubmit={handleSubmit}>
                    <input type="text" required ref={username} placeholder='Enter your username' className="registerInput" />
                    <input type="email" required ref={email} placeholder='Enter your email' className="registerInput" />
                    <input type="password" required ref={password} minLength="8" placeholder='Enter your password' className="registerInput" />
                    <input type="password" required ref={passwordAgain} minLength="8" placeholder='Enter your password again' className="registerInput" />
                    <button className='signupButton' type='submit'>Signup</button>
                    <button className='loginButton'>Login</button>
                </form>
            </div>
        </>
    )
}
