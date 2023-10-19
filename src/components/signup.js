import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUp =()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();
    const [error,setError]= React.useState(false)

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    })

    const collectData=async()=>{
        console.warn(name,email,password);
        if(!name || !password || !email )
        {
            setError(true)
            return false;
        }
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result)
        {
            navigate('/')
        }
    }
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            {error && !name && <span className="invalid-input">Enter Name</span>}
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            {error && !email && <span className="invalid-input">Enter Email</span>}
            <input className="inputBox" type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            {error && !password && <span className="invalid-input">Enter Password</span>}
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>

        </div>
    )
}
export default SignUp;