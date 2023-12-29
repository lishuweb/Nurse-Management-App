import React, { useEffect } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import calendar from '../assests/calendar.png';
import overview from '../assests/overview.png';
import nurse from '../assests/nurse.png';
import chat from '../assests/chat.png';
import setting from '../assests/setting.png';
import axios from 'axios';
import { useState } from 'react';

const NavBar = ()=> {


    
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetchData();
    }, []);

    // const fetchData = async() => {
    //     const createdData = await axios.get('http://localhost:3001/api/nurse/');
    //     let val = createdData.data;
    //     console.log(val, "val");
    //     val.map(res => {
    //         setData([...data, {
    //             name: res.name,
    //             email: res.email,
    //             contact: res.contact,
    //             workingDays: res.workingDays,
    //             startDutyTime: res.startDutyTime,
    //             endDutyTime: res.endDutyTime,
    //             roundingManager: res.roundingManager,
    //             image: res.image
    //         }]);
    //     });
    // };

    const fetchData = async() => {
        const createdData = await axios.get('http://localhost:3001/api/nurse/');
        setData(createdData.data);
    }
    console.log(data, "DATA");

    return(
        <div className="navBarMain">
            <div className="navBarDetails">
                <p className="navBarDetails-hd">Nursing</p>
                <div className="navBarDetails-items">
                    <Link className="navBarDetails-links" style={{marginTop: "20px"}} to="/display">
                        <div className='navBarDetails-img'>
                            <div className='navBarDetails-images'>
                                <img src={overview} alt='Image' height={"25px"} width={"25px"}/>
                            </div>
                            
                            <div className='navBarDetails-text'>
                                Overview
                            </div>
                        </div>
                    </Link>
                    <Link className="navBarDetails-links" to="/display">
                        <div className='navBarDetails-img'>
                            <div className='navBarDetails-images'>
                                <img src={calendar} alt='Image' height={"25px"} width={"25px"}/>
                            </div>
                            
                            <div className='navBarDetails-text'>
                                Calendar
                            </div>
                        </div>
                    </Link>
                    <Link className="navBarDetails-links" to="/display">
                        <div className='navBarDetails-img'>
                            <div className='navBarDetails-images'>
                                <img src={nurse} alt='Image' height={"25px"} width={"25px"}/>
                            </div>
                            
                            <div className='navBarDetails-text'>
                                Nurse Details
                            </div>
                        </div>
                    </Link>
                    <Link className="navBarDetails-links" to="/display">
                        <div className='navBarDetails-img'>
                            <div className='navBarDetails-images'>
                                <img src={chat} alt='Image' height={"25px"} width={"25px"}/>
                            </div>
                            
                            <div className='navBarDetails-text'>
                                Messages
                            </div>
                        </div>
                    </Link>
                    <Link className="navBarDetails-links" to="/display">
                        <div className='navBarDetails-img'>
                            <div className='navBarDetails-images'>
                                <img src={setting} alt='Image' height={"25px"} width={"25px"}/>
                            </div>
                            
                            <div className='navBarDetails-text'>
                                Settings
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="navBarSecond">
                <div className="navBarSecondTop">
                    <div className="navBarSecondTopBtn">
                        <button className='padding-btn'>
                            <Link to='../create' className="navBarLink">Create</Link>
                        </button>
                    </div>

                    <div className="navBarSecondTopBtnlo">
                        <button className='padding-btn'>
                            Logout
                        </button>
                    </div>
                </div>

                <div className='navBarSecondDown'>
                    <table className='navBarSecondDownTable'>
                        <thead>
                            <tr className='navBarSecondDownTableOne' style={{fontSize: "15px"}}>
                                <td>S.N.</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Contact</td>
                                <td>Working Days</td>
                                <td>Start Duty Time</td>
                                <td>End Duty Time</td>
                                <td>Rounding Manager</td>
                                <td>Image</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className='navBarSecondDownTableTwo' style={{borderBottom: "1px solid #C8D5B9", fontSize: "14px"}}>
                                    <td>{index + 1}.</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.workingDays}</td>
                                    <td>{item.startDutyTime}</td>
                                    <td>{item.endDutyTime}</td>
                                    <td>{item.roundingManager}</td>
                                    <td>{item.image} </td>      
                                    <td className='dropDown'>
                                        <img className="navBarDrop" src={setting} height="20px" width="20px" style={{textAlign:"center", justifyContent: "center"}}/>
                                        <div class="dropdown-content">
                                            <Link to='../update' className="navBarDrop" data={data}>Update</Link><br/>
                                            <Link to='../create' className="navBarDrop">Delete</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar;