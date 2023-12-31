import React from 'react';
import './create.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Login from '../Signup/Login';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [workingDays, setWorkingDays] = useState("");
    const [startDutyTime, setStartDutyTime] = useState("");
    const [endDutyTime, setEndDutyTime] = useState("");
    const [roundingManager, setRoundingManager] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/nurse/create', {
            name,
            email,
            contact,
            workingDays,
            startDutyTime,
            endDutyTime,
            roundingManager,
            image
        })
            .then((res) => {
                console.log(res, "res");
                if(res.data === "Success")
                {
                    navigate('/navbar');
                    console.log("created");
                }
            });
    };

    return (
        <>
        {localStorage.getItem('user') ? 
            <div className='formDetails'>
            <h1>Create Nurse Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="name">Full Name</label>
                    </div>
                    <div className="col-75">
                        <input type='text' name='name' className='name' required
                            value = {name} onChange={(event)=>setName(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type='email' name='email'  className='email' required
                            value = {email} onChange={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="contact">Contact Number</label>
                    </div>
                    <div className="col-75">
                        <input type='number' name='contact' className='contact' required
                            value = {contact} onChange={(event)=>setContact(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="workingDays">Working Days</label>
                    </div>
                    <div className="col-75">
                        <input type='text' name='workingDays' className='workingDays' required
                            value = {workingDays} onChange={(event)=>setWorkingDays(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="startDutyTime">Start Duty Time</label>
                    </div>
                    <div className="col-75">
                    {/* <input type="time" id="appt" name="appt" min="09:00" max="18:00" required /> */}
                        <input type='time' name='startDutyTime' className='startDutyTime'  required
                            value={startDutyTime} onChange={(event)=>setStartDutyTime(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="endDutyTime">End Duty Time</label>
                    </div>
                    <div className="col-75">
                        <input type='time' name='endDutyTime' className='endDutyTime'  required
                            value={endDutyTime} onChange={(event)=>setEndDutyTime(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="roundingManager">Working Days</label>
                    </div>
                    <div className="col-75">
                        <select required value={roundingManager} onChange={(event)=>setRoundingManager(event.target.value)} > 
                            <option>True</option>
                            <option>False</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="image">Image</label>
                    </div>
                    <div className="col-75">
                        <input type='text' name='image' className='image' required
                            value={image} onChange={(event)=>setImage(event.target.value)}
                        />
                    </div>
                </div>
                <div className="col-75">
                    <button className='btn'>
                        Create
                    </button> 
                </div>
                
                
            </form>
            </div>
        : 
        
        <Login />
        
        }
        { !localStorage.getItem('user') && window.alert("Login first!")}
        </>
       
    )
};

export default Create;