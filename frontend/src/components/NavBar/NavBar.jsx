import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import calendar from '../assests/calendar.png';
import overview from '../assests/overview.png';
import nurse from '../assests/nurse.png';
import chat from '../assests/chat.png';
import setting from '../assests/setting.png';
import Display from './Display';
import { useNavigate } from 'react-router-dom';
import Login from '../Signup/Login';

const NavBar = ()=> {
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem('user');
        navigate('/login');
    }

    return(
        <>
        {localStorage.getItem('user') ? 
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
                        <button className='padding-btn'>
                            <Link to='/display' className="navBarLink">Display</Link>
                        </button>
                    </div>

                    <div className="navBarSecondTopBtnlo">
                    
                        <button className='padding-btn'>
                            {localStorage.getItem('user') ? 
                                <button onClick={handleLogout}>Logout</button> :
                                <Link to='/login' className="navBarLink">Login</Link>
                            }
                    </button>
                    </div>
                </div>
                <Display />
            </div>
            </div>
        : 
        <Login />
        }
        {!localStorage.getItem('user') && window.alert('Login first')}
        </>
        
        
    )
}

export default NavBar;