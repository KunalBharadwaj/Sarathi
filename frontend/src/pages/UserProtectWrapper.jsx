import React, {Children, useContext, useEffect} from 'react'
import { UserContextData } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    if(!token)
    {
        navigate('/login');
    }

    React.useEffect(() => {
      if(!token)
      {
        navigate('/login');
      }
    }, [token]);
  return (
    <>
        {children}
    </>
  )
}

export default UserProtectWrapper