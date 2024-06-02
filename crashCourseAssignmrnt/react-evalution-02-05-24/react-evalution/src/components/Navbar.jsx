import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContextProvider"

const Navbar = () => {
    
    const {isAuthenticated, email, login} = useContext(AuthContext);
  return (
   <Box bg="gray.400" p={3} color="white">
     <Flex justify="space-around" align="center" >
        { isAuthenticated ? ( 
            <>
           <Text>{email}</Text>
        <Flex>
        
            <Button bg="teal.300"colorScheme='gray.300' onClick={login}>Logout</Button> 
            
        </Flex> 
        </>
    ):( <Link to="/login">  <Button bg="teal.200" colorScheme='pink'>Login</Button></Link>
        
        )}
     
     <Link to="/">Home</Link>
       
    
     </Flex >
    
   
   </Box>
  )
}

export default Navbar
