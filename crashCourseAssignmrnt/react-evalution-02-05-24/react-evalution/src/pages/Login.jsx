import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, Box, Button, Input, Text } from '@chakra-ui/react';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
const { login, authState } = useContext(AuthContext);
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
                url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
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
   <Box maxW="sm" mx="auto" mt="10">
    <Text fontSize="2xl" mb="4" >Login</Text>
    {error && (
        <Alert status='error' mb='4'>
            <AlertIcon />
            {error}
        </Alert>
    )}
    <form onSubmit={handleSubmit}>
        <Input 
        ref={emailRef}
        placeholder='Enter Email'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb="4"
        />
        <Input 
        
        placeholder='Enter Password'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mb="4"
        />
        <Button  borderRadius={10} colorScheme='red' type='submit'>Login</Button>
    </form>
   </Box>
  )
}

export default Login
