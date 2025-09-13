import React from 'react'
import { NavLink } from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  return (
   <div className='d-flex justify-content-center align-items-center bg-body-secondary vh-100'>
   <div className='shadow p-3 mb-5 bg-light rounded-1 w-25'>
   <h2>Register</h2>
   <form>
    <div className='mb-3'>
        <label htmlFor='name'><strong>Name</strong></label>
        <input type='text' placeholder='Enter name' name='name' autoComplete='off' className='form-control rounded-0'/>
    </div>
    <div className='mb-3'>
        <label htmlFor='email'><strong>Email</strong></label>
        <input type='text' placeholder='Enter email' name='email' autoComplete='off' className='form-control rounded-0'/>
    </div>
    <div className='mb-3'>
        <label htmlFor='password'><strong>Password</strong></label>
        <input type='text' placeholder='Enter password' name='password' autoComplete='off' className='form-control rounded-0'/>
    </div>
    <button type='submit' className='btn btn-success rounded-1 border-1 w-100'>Register</button>
   </form>
    <p>Already have an Account</p>
    <NavLink to='/login' className='btn btn-default border rounded-0 w-100'>Login</NavLink>
   </div>
   </div>
  )
}

export default Signup
