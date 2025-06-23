import React from 'react'
import { useState } from 'react'
import './Reg.css'
import axios from 'axios'

const Reg = () => {

    
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
        const response =await axios.post("http://127.0.0.1:8000/create",{
            fullname: formvalue.fullname,
            email: formvalue.email,
            password: formvalue.password
        })
        setformvalue({
            fullname: '',
            email :'',
            password: '',   
        })

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
        </form>
    </div>
  )
}

export default Reg