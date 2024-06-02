import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()
     
    const emailRef = useRef(null);

    useEffect(()=>{
        emailRef.current.focus();
    },[])

     async function handleSubmit(e) {
        e.preventDefault()
        try {
            let res = await axios({
                method: "post",
                data: {
                    email,
                    password,
                }
            });
            login(res?.data?.token);
            navigate("/")


        } catch (err) {
            setError("Invalid email or password")
        }
    }
  return (
    <div>
      login
    </div>
  )
}

export default Login
