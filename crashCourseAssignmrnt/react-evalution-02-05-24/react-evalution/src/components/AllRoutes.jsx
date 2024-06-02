import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        }/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product' element={
            <PrivateRoute>
                <ProductDetailsPage  />
            </PrivateRoute>
        }/>
    </Routes>
  
  )
}

export default AllRoutes
