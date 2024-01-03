import React from 'react';
import './signup.css';
import bg from '../assests/bg.jpg';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, "email");
    console.log(password, "password");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/register/login', {
            email,
            password
        })
            .then((res) => {
                console.log(res, "res");
                if(res.data)
                {
                    window.localStorage.setItem("user", JSON.stringify(res));
                    navigate('/navbar');
                    console.log("created");
                }
            });
    };

    return (
        <div className='signupForm'>
                <div className='signupFormDetails'>
                    <h1 style={{marginTop: "20px"}}>Login</h1>
                    <form className='signupFormTag' onSubmit={handleSubmit}>
                            <div className="signupFormField">
                                <label htmlFor='email' className='email'>Email</label>
                                <input type='email' name='email' className='email' required
                                    value = {email} onChange={(event)=>setEmail(event.target.value)}
                                />
                            </div>
                            <div className="signupFormField">
                                <label htmlFor='password'>Password</label>
                                <input type='password' name='password' className='password' required
                                    value = {password} onChange={(event)=>setPassword(event.target.value)}
                                />
                            </div>
                            <div className='signupFormLink'>
                                <p>Don't have an account?</p>
                                <Link className="lishu">Sign up</Link>
                            </div>
                            <div>
                                <button className='signupFormButton'>
                                    Login
                                </button>
                            </div>
                    </form>
                </div>
            <div className='signupFormImg'>
                <img src={bg} alt='Image' />
            </div>
        </div>
        
    )
};

export default Login;

