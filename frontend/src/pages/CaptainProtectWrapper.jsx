import React, {Children, useContext, useEffect, useState} from 'react'
import { CaptainContextData } from '../Context/CaptainContext';
import { useNavigate } from 'react-router-dom'
import { use } from 'react';
import axios from 'axios';

const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {captain, setCaptain} = React.useContext(CaptainContextData);
    const [isLoading, setIsLoading] = useState(true);

    if(!token)
    {
        navigate('/captain-login');
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(response =>{
        if(response.status === 200)
        {
            setCaptain(response.data.captain);
            setIsLoading(false);
        }
    }).catch(err => {
        console.log(err);
        setIsLoading(false);
        localStorage.removeItem('token');
        navigate('/captain-login');
    })

    if(isLoading)
    {
        return (
            <div>Loading...</div>
        )
    }
    React.useEffect(() => {
      if(!token)
      {
        navigate('/captain-login');
      }
    }, [token]);
  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectWrapper