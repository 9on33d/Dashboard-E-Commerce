import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate();
    const [error,setError]= React.useState(false)
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate("/")
        }
    })
    const handleLogin= async()=>{
        console.warn("email,password",email,password)
        if( !email || !password )
        {
            setError(true)
            return false;
        }
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers: {'Content-Type':'application/json'}
        });
        result = await result.json();
        console.warn(result)
        if(result.name)
        {
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/")
        }
        else
        {
            alert("plz enter correct details")
        }
    }

    return(
        <div className="login">
            <input type="text" className="inputBox" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            {error && !email && <span className="invalid-input">Enter Valid Email</span>}
            <input type="text" className="inputBox" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
            {error && !password && <span className="invalid-input">Enter Valid Password</span>}
            <button onClick={handleLogin}  className="appButton" type="button">Login</button>
        </div>
    )
}
export default Login