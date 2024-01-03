import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Delete = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const { id } = useParams();

    console.log(id, 'id');

    const navigate = useNavigate();

    const deleteData = async() => {
        await axios.delete(`http://localhost:3001/api/nurse/delete/${id}`)
        .then((res) => {
            console.log(res, "RES");
            if(res.data === "Success")
            {
                navigate('/navbar');
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


    return (
        <>
        <button onClick={() => handleDelete({id})}>Delete</button>
        
        </>
        
    )
};

export default Delete;