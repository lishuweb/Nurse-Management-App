import React from 'react';
import './create.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Update = () => {
    const [items, setItems] = useState([{}]);
    const { id } = useParams();
    console.log(id, "id");

    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async() => {
            const val = await axios.get(`http://localhost:3001/api/nurse/${id}`);
            if(val)
            {
                setItems(val.data);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/api/nurse/update/${id}`, items)
            .then((res) => {
                console.log(res, "res");
                if(res.data === "Success")
                {
                    navigate('/navbar');
                    console.log("Updated");
                }
            });
    };

    return (
        <div className='formDetails'>
            <h1>Update Nurse Details</h1>
            <form onSubmit={handleSubmit}>
                    <div key={items.id}>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="name">Full Name</label>
                            </div>
                            <div className="col-75">
                                <input type='text' name='name' className='name' required
                                    value = {items.name} onChange={(event)=>setItems(
                                        {
                                        ...items,
                                        name:event.target.value
                                        }
                                    )}                                
                                        // onChange={(event) => setItems({ ...items, name: event.target.value })}
                                    // value={name} onChange={(event) =>setName(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col-75">
                                <input type='email' name='email'  className='email' required
                                    value = {items.email} onChange={(event)=>setItems(
                                        {
                                        ...items,
                                        email:event.target.value
                                        }
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="contact">Contact Number</label>
                            </div>
                            <div className="col-75">
                                <input type='number' name='contact' className='contact' required
                                    value = {items.contact} onChange={(event)=>setItems(
                                        {
                                        ...items,
                                        contact:event.target.value
                                        }
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="workingDays">Working Days</label>
                            </div>
                            <div className="col-75">
                                <input type='text' name='workingDays' className='workingDays' required
                                    value = {items.workingDays} onChange={(event)=>setItems(
                                        {
                                        ...items,
                                        workingDays:event.target.value
                                        }
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="startDutyTime">Start Duty Time</label>
                            </div>
                            <div className="col-75">
                                <input type='time' name='startDutyTime' className='startDutyTime' required
                                    value={items.startDutyTime} onChange={(event)=>setItems(
                                        {
                                        ...items,
                                        startDutyTime:event.target.value
                                        }
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="endDutyTime">End Duty Time</label>
                            </div>
                            <div className="col-75">
                                <input type='time' name='endDutyTime' className='endDutyTime' required
                                    value={items.endDutyTime} onChange={(event)=>setItems(
                                        {
                                        ...items,
                                        endDutyTime:event.target.value
                                        }
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="roundingManager">Working Days</label>
                            </div>
                            <div className="col-75">
                                <select required value={items.roundingManager} onChange={(event)=>setItems(
                                        {
                                        ...items,
                                        roundingManager:event.target.value
                                        }
                                    )} > 
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
                                    value={items.image} onChange={(event)=>setItems(
                                        {
                                        ...items,
                                        image:event.target.value
                                        }
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                
                <div className="col-75">
                    <button className='btn'>
                        Update
                    </button> 
                </div>
                
                
            </form>
        </div>
    )
};

export default Update;