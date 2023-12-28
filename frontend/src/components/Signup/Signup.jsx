import React from 'react';
import './signup.css';
import bg from '../assests/bg.jpg';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, "email");
    console.log(password, "password");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/register/create', {
            email,
            password
        })
            .then((res) => {
                console.log(res, "res");
            }).catch((e) => {
                console.log(e);
            });
            navigate('/login');
    };

    return (
        <div className='signupForm'>
                <div className='signupFormDetails'>
                    <h1 style={{marginTop: "20px"}}>Sign up</h1>
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
                                <p>Already have an account?</p>
                                <Link className="lishu" to='/login'>Login</Link>
                            </div>
                            <div>
                                <button className='signupFormButton'>
                                    Sign up
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

export default Signup;