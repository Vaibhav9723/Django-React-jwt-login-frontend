import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();

  useEffect(() => {
    const getDashboard = async () => {
      const token = localStorage.getItem("access");

      if (!token) {
        // ⚠️ Token nahi mila to login par bhej do
        nav('/login');
        return;
      }

      try {
        const response = await axios.get("https://django-react-jwt-login.onrender.com/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);  // ✅ Dashboard data mil gaya
      } catch (error) {
        // ❌ Agar token galat ya expire ho gaya to login par bhejo
        nav('/login');
      }
    };

    getDashboard();
  }, [nav]);

  return (
    <div>
      <h1 style={{backgroundColor:'red'}}>Welcome Home</h1>
    </div>
  );
};

export default Home;
