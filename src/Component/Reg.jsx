import React from 'react'
import { useState } from 'react'
import './Reg.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Reg = () => {

    const nav = useNavigate()
    const [formvalue,setformvalue] = useState({
        fullname: '',
        email :'',
        password: '',   
    })

    const formhandle =async (e) =>{
        e.preventDefault();
        console.log(formvalue)
        await regCustomer()

    }

    const regCustomer = async () =>{
        const response =await axios.post("https://django-react-jwt-login.onrender.com/create",{
            fullname: formvalue.fullname,
            email: formvalue.email,
            password: formvalue.password
        })
        setformvalue({
            fullname: '',
            email :'',
            password: '',   
        })
        nav('/login')

    }

    const inputChange = (e) =>{
        const {name,value}= e.target;
        setformvalue({...formvalue,[name]:value})
    }
  return (

    <div className="regform">
        <form onSubmit={formhandle}>
            <h1>SignUp</h1>
            <label>Fullname</label>
            <input type="text" name='fullname' value={formvalue.fullname} onChange={inputChange}/>
            <label>Email Id</label>
            <input type="email" name='email'value={formvalue.email} onChange={inputChange}/>
            <label>Password</label>
            <input type="password" name='password' value={formvalue.password} onChange={inputChange}/>
            <button>Submit</button>
        <p>Already have an account? <Link to={'/login'}>Sign In</Link></p>

        </form>
    </div>
  )
}

export default Reg