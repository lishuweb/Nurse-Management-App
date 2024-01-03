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
    const [notification, setNotification] = useState("");
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
                console.log(res.data.error)
                if(res.data.error === "Email or password is missing!")
                {
                    // console.log(res);
                    // window.alert(res.data.error);
                    // navigate('/signup');
                    setNotification("Email or password is missing!");
                    setTimeout(() => {
                        setNotification("");
                    }, 3000);
                }
                else if(res.data.error === "Email already exists!")
                {
                    console.log(res.data.error)
                    window.alert(res.data.error);
                    navigate('/signup');
                }
                else if(res.data.error === "Password must be atleast 8 characters!")
                {
                    console.log(res.data.error)
                    window.alert(res.data.error);
                    navigate('/signup');
                }
                else 
                {
                    navigate('/login');
                }
            }).catch((e) => {
                console.log(e);
            });
    };

    return (
        
        <div className='signupForm'>
            <div className='signupFormDetails'>
                <h1 style={{marginTop: "20px"}}>Sign up</h1>
                <form className='signupFormTag' onSubmit={handleSubmit}>
                            <div className="signupFormField">
                                <label htmlFor='email' className='email'>Email</label>
                                <input type='email' name='email' className='email'
                                    value = {email} onChange={(event)=>setEmail(event.target.value)}
                                />
                            </div>
                            <div className="signupFormField">
                                <label htmlFor='password'>Password</label>
                                <input type='password' name='password' className='password' 
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
            <div className="error">
                { notification }
            </div> 
            <div className='signupFormImg'>
                <img src={bg} alt='Image' />
            </div>
        </div>
        
    )
};

export default Signup;