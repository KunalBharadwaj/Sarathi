import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                if(response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error("Logout failed:", error);
                setLoading(false);
            }
        };
        
        logoutUser();
    }, [navigate]);

    return (
        <div className="flex justify-center items-center h-screen">
            {loading ? "Logging out..." : "Logout failed. Please try again."}
        </div>
    );
}

export default UserLogout