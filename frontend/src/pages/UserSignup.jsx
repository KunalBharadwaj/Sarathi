import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import logo from '../assets/SarathiLogo.png'; 
import axios from 'axios'; // Import axios for making HTTP requests
import { UserContextData } from '../Context/UserContext';


const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserContextData);

  const submitHandler = async(e) => {
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname : firstName,
        lastname : lastName
      },
      email : email,
      password : password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if(response.status === 201){
      const data = response.data;
      
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between' >
      <div>
        <img className='w-24 drop-shadow-lg' src={logo} alt="Sarathi Logo" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>

          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-3 mb-5'>
          <input 
            required
           className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
           type="text" 
           placeholder='First name' 
           value={firstName}
           onChange={(e) =>{
            setFirstName(e.target.value);
           }}
           />

          <input required
           className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
           type="text" 
           placeholder='Last name' 
           value={lastName}
           onChange={(e) => { // Corrected from 'lastname' to 'lastName'
            setLastName(e.target.value);
           }}
           />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input required
           className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
           type="email" 
           placeholder='example@gmail.com' 
           value={email}
           onChange={(e) => { // Corrected from '((e) =>' to '(e) =>'
            setEmail(e.target.value);
           }}
           />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input required 
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
            type="password" 
            placeholder='password' 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            />

          <p className='text-center mb-1'>Already have an account? <Link to={'/login'} className='text-blue-600'>Login here</Link></p>
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Register</button>
        </form>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>By proceeding you consent to recieve mails, including by automated means, from Uber and its affiliates to the registered mail account provided.</p>
      </div>
    </div>
    </div>
  )
}

export default UserSignup