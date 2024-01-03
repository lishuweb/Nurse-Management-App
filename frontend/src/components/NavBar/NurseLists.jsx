import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import './singleDetails.css';
import back from '../assests/back.png';
import { Link } from 'react-router-dom';

const NurseLists = () => {
    const [details, setDetails] = useState([{}]);
    const { id } = useParams();
    console.log(id, 'id');

    useEffect(() => {
        const fetchData = async() => {
            const nurseData = await axios.get(`http://localhost:3001/api/nurse/${id}`);
            if(nurseData)
            {
                setDetails(nurseData.data);
            }
        };
        fetchData();
    }, [id]);

    const nurseListsBack = {
        height: "30px",
        marginTop: "30px",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto"
    }

    return (
        <>
            {/* <NavBar /> */}
            <div className='nurseListsBack'>
                <Link to='/navbar'>
                    <img src={back} style={nurseListsBack}/>
                </Link>
            </div>

            <div className='singleDetails' key={details.id}>
                <div className='singleDetailsLeft'>
                    <div className='singleDetailsLeftImg'>
                        {details.image}
                    </div>
                    <p>Name: {details.name}</p>
                </div>
                <div className='singleDetailsRight'>
                    <div className="row">
                        <div className="col-40">
                            <p>Email</p>
                        </div>
                        <div className="col-50">
                            <p>{details.email}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-40">
                            <p>Contact</p>
                        </div>
                        <div className="col-50">
                            <p>{details.contact}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-40">
                            <p>Working Days</p>
                        </div>
                        <div className="col-50">
                            <p>{details.workingDays}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-40">
                            <p>Start Duty Time</p>
                        </div>
                        <div className="col-50">
                            <p>{details.startDutyTime}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-40">
                            <p>End Duty Time</p>
                        </div>
                        <div className="col-50">
                            <p>{details.endDutyTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
};

export default NurseLists;