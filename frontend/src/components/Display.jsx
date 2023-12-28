import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NavBar from './NavBar/NavBar';

const Display = () => {
    const [details, setDetails] = useState([{}]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() => {
        const getData = await axios.get('http://localhost:3001/api/nurse/');
        console.log(getData.data);
        setDetails(getData.data);
    }

    return (
        <div>
            <NavBar />
            <h1 className='nurse-display'>Nurse Data</h1>
            {details.map((item,index) => (
                <p key={index}>
                    Contact: {item.contact}
                </p>
            ))}
        </div>
    )
};

export default Display;