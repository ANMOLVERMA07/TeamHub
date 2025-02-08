import React, { useContext, useEffect, useState } from 'react'

const Login = () => {  

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex 
    justify-center items-center'>
        
        <form className='space-y-4'>
          <div>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>

          <div>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200'
          >Signup</button>
        </form>
        <p className='mt-4 text-center text-sm text-gray-600'>
          Already have an account?{' '}
          <a href='#' className='text-blue-600 hover:text-blue-500'>
            Sign in
          </a>
        </p>
    </div>
  )
}

export default Login