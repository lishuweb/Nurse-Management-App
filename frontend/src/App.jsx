import React from 'react';
import Create from './components/Create'; 
import Display from './components/Display';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create' element = {<Create />} />
        <Route path='/display' element={<Display />} />
        <Route path='/navbar' element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
