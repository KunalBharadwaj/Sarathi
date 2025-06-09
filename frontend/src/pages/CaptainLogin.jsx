import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/SarathiLogo.png'; 

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [captainData, setCaptainData] = useState('');

  const submitHandler = (e) =>{
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      });
      setEmail('');
      setpassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between' >
    <div>
      <img className='w-24 mb-2 drop-shadow-lg' src={logo} alt="Sarathi Logo" />
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input required
         value={email}
         onChange={(e) => {setEmail(e.target.value);}}
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='example@gmail.com' />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input required 
          value={password}
          onChange={(e) => {setpassword(e.target.value);}}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' />

        <p className='text-center mb-1'>Join a fleet? <Link to={'/captain-signup'} className='text-blue-600'>Register as a Captain</Link></p>
        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
      </form>
    </div>

    <div>
      <Link to='/login' className='bg-[#b45210] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
        Sign in as User
      </Link>
    </div>
  </div>
  )
}

export default CaptainLogin