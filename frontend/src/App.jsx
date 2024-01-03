import React from 'react';
import Create from './components/Create/Create'; 
import NavBar from './components/NavBar/NavBar';
import Signup from './components/Signup/Signup';
import Login from './components/Signup/Login';
import Update from './components/Create/Update';
import NurseLists from './components/NavBar/NurseLists';
import Delete from './components/Create/Delete';
// import {Cloudinary} from "@cloudinary/url-gen";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from './components/NavBar/Display';

const App = () => {

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: "demo"
  //   }
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/logout' element={<Logout />} /> */}
        <Route path='/create' element = {<Create />} />
        <Route path='/nurse/:id' element={<NurseLists />} />
        <Route path='/navbar' element={<NavBar />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/display' element={<Display />} />
        <Route path='/delete/:id' element={<Delete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
