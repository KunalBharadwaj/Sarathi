import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SarathiLogo.png'; 
import { CaptainContextData } from '../Context/CaptainContext.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const {captain, setCaptain} = React.useContext(CaptainContextData);

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData =  {
      fullname:{
        firstname : firstName,
        lastname : lastName
      },
      email : email,
      password : password,
      vehicle : {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData); 
    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
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
           onChange={(e) => {
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
           onChange={(e) => {
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
            <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
            <div className='flex gap-3 mb-5'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='Vehicle Color'
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />

              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='Vehicle Plate Number'
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
            </div>

            <div className='flex gap-3 mb-5'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                type="number"
                min={0}
                max={7}
                placeholder='Capacity'
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />

              <select
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          <p className='text-center mb-1'>Already have an account? <Link to={'/captain-login'} className='text-blue-600'>Login here</Link></p>
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

export default CaptainSignup