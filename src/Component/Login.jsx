import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const nav = useNavigate();

    const [logindata,setLoginData] = useState({
        username:'',
        password:''
    })

    const getData = (e) =>{
        const {name,value} = e.target;
        setLoginData({
            ...logindata,[name]:value
        })
    }

    const formhandle = async(e) =>{
        e.preventDefault();
        console.log(logindata)
        await checkuser()
    }

    // const checkuser = async() =>{
    //     try {
    //         const response =await axios.post("http://127.0.0.1:8000/loginU",{
    //         username: logindata.username,
    //         password: logindata.password
    //         })
    //         if (response)
    //         {
    //             alert(response.data.message)
    //         }
    //     } catch (error) {
    //         if(error.response && error.response.data){
    //             alert(error.response.data.error)
    //         }
    //         else{
    //             alert('Something went wrong. Please try again.');
    //         }
    //     }
    // }

    const checkuser = async () => {
  try {
    const response = await axios.post("https://django-react-jwt-login.onrender.com/loginU", {
      username: logindata.username,
      password: logindata.password,
    });

    if (response.status === 200) {
      alert(response.data.message);
      // ✅ Save tokens in localStorage
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      nav('/')
    }
  } catch (error) {
    if (error.response && error.response.data) {
      alert(error.response.data.error);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
};


  return (
    <div className="regform">
        <form onSubmit={formhandle}>
            <h1>Login</h1>
            <label>Username</label>
            <input name="username" type="text" value={logindata.username} onChange={getData} />
            <label>Password</label>
            <input name='password' type="password" value={logindata.password} onChange={getData} />
            <button>Login</button>
        </form>
        <p>Already have an account? <Link to={'/login'}>Sign In</Link></p>
    </div>
  )
}

export default Login

