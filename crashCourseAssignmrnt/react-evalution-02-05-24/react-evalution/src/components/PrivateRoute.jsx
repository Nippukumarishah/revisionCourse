import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Box } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { authState } = useContext(AuthContext);
  return (
    <Box>
        { authState ? children : <Navigate to="/login" />}
    </Box>
   
  )
}

export default PrivateRoute
