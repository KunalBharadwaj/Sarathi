import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/SarathiLogo.png'; 
import { UserContextData } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [userData, setUserData] = useState({})


  const { user, setUser } = React.useContext(UserContextData);
  const navigate = useNavigate();

  const submitHandler = async(e) =>{
      e.preventDefault();
      const userData = {
        email: email,
        password: password
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

      if(response.status === 200){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
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
           onChange={(e) => setEmail(e.target.value)}
           className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='example@gmail.com' />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input required 
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' />

          <p className='text-center mb-1'>New here? <Link to={'/signup'} className='text-blue-600'>Create new Account</Link></p>
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
        </form>
      </div>

      <div>
        <Link to='/captain-login' className='bg-[#90b410] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin