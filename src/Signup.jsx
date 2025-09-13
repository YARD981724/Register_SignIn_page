import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [name, setName]=useState();
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();

  const handleSubmit = (event)=>{
    event.preventDefault()
    axios.post('https://localhost:3001/register', {name, email, password})
    .then(result => console.log(result))
    .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='shadow p-3 mb-5 bg-light rounded w-25'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name'>
            <strong>Name</strong>
          </label>
          <input onChange={(event)=> setName(event.target.value)} type='text' placeholder='Enter Name' autoComplete='off' name='name' className='form-control rounded-0'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>
          <strong>Email</strong>
          </label>
         <input onChange={(event) => setEmail(event.target.value)} type='email' placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>
            <strong>Name</strong>
          </label>
          <input onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Enter Password' autoComplete='off' name='password' className='form-control rounded-0'/>
        </div>
        <button type='submit' className='btn btn-success border w-100 rounded-1'>Register</button>
      </form>
      <p>Already Have an Account</p>
      <NavLink to='/login' className="btn btn-default border w-100 bg-light">Login</NavLink>
    </div>

    </div>
  )
}

export default Signup
