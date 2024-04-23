import React, { useState } from 'react'
const Login = ({ setFlag }) => {

  let creds =
  {
    username: '',
    password: ''
  }


  const user = "nmn"
  const pass = "nmn"
  const handleLogin = () => {
    // if (creds.username === 'user' && creds.password === 'pass') {
      setFlag(false);

    }
  // }
  return (
    <>


      <div className="flex flex-col h-[100vh] space-y-4 justify-center bg-[#181c24]   ">
        <h1 className='text-6xl font-medium mx-auto mb-5px text-white'>Welcome Back </h1>
        <input
          type="text"
          placeholder="Username"
          
          className="border border-gray-300 px-4 py-2 rounded-md w-96 mx-auto"
        />
        <input
          type="password"
          placeholder="Password"
          
          className="border w-96 px mx-auto border-gray-300 px-4 py-2 rounded-md"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto">
          Login </button>

      </div>
    </>
  )
}

export default Login