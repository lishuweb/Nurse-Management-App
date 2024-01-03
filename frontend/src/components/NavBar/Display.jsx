import React from 'react';
import more from '../assests/more.png';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Display = () => {
    const [data, setData] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    // const { id } = useParams();

    // console.log(id, 'id');

    const navigate = useNavigate();

    const deleteData = async(event) => {
        await axios.delete(`http://localhost:3001/api/nurse/delete/${idToDelete}`)
        .then((res) => {
            console.log(res, "RES");
            if(res.data === "Success")
            {
                navigate('/navbar');
                event.preventDefault();
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    const handleDelete = (id) => {
        setIdToDelete(id);
        setShowDialog(true);
    };

    const confirmDelete = () => {
        setShowDialog(false);
        deleteData();
    };

    const cancelDelete = () => {
        setShowDialog(false);
    };

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async() => {
        const createdData = await axios.get('http://localhost:3001/api/nurse/');
        setData(createdData.data);
    }
    console.log(data, "DATA");

    return (
        <div className='navBarSecondDown'>
            <window className="alert">
                {showDialog && (
                    <div className="confirmationDialog">
                        <p>Are you sure you want to delete this data?</p>
                        <button onClick={confirmDelete}>Yes</button>
                        <button onClick={cancelDelete}>No</button>
                    </div>
                )}
            </window>
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
                    {/* <td>Image</td> */}
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
                        {/* <td>{item.image} </td>       */}
                        <td className='dropDown'>
                            <img className="navBarDrop" src={more} height="20px" width="20px" style={{textAlign:"center", justifyContent: "center"}}/>
                            <div className="dropdown-content">
                                <Link to={`/update/${item.id}`} className="navBarDrop" >Update</Link>
                                {/* <Link to={`/delete/${item.id}`} className="navBarDrop" >Delete</Link> */}
                                <button onClick={() => handleDelete(`${item.id}`)}>Delete</button>
                                <Link to={`/nurse/${item.id}`} className="navBarDrop" >More</Link>
                                
                            </div>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    </div>
    )
};

export default Display;