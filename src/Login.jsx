import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='d-flex  justify-content-center align-items-center  bg-secondary vh-100'>
      <div className='shadow p-3 mb-5 bg-light rounded w-25'>
        <h2>Login</h2>
        <form>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
               <input type='email' name='email' placeholder='Enter Email' autoComplete='off' className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>
                    <strong>Password</strong>
                </label>
                <input type='password' name='password' placeholder='Enter password' autoComplete='off' className='form-control rounded-0'/>
            </div>
            <button className='btn btn-success border w-100 rounded-1'>Login</button>
        </form>
        <p>Create a new Account</p>
        <NavLink to='/register' className='btn btn-default border w-100 bg-light'>Register</NavLink>
      </div>
    </div>
  )
}

export default Login
