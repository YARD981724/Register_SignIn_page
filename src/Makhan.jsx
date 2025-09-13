import React from 'react'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";

const Makhan = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
    </div>
  )
}

export default Makhan
