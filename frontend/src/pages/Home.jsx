import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/SarathiLogo.png'; // adjust path relative to current file


const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1748721666723-1fe0f4e8a288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTB8fHxlbnwwfHx8fHw%3D)] h-screen pt-8 flex justify-end flex-col w-full relative'>
          <div className='absolute top-5 left-5'>
          <img className='w-24 drop-shadow-lg' src={logo} alt="Sarathi Logo" />
          </div>
          <div className='bg-white py-5 px-10'>
            <h2 className='text-2xl font-bold'>Get Started with Sarathi</h2>
            <Link to= '/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-2'>Continue</Link>
          </div>
        </div>
    </div>
  )
}

export default Home