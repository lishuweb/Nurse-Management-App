import React from 'react';
import Create from './components/Create/Create'; 
import Display from './components/Display';
import NavBar from './components/NavBar/NavBar';
import Signup from './components/Signup/Signup';
import Login from './components/Signup/Login';
import Update from './components/Create/Update';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element = {<Create />} />
        <Route path='/display' element={<Display />} />
        <Route path='/navbar' element={<NavBar />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
