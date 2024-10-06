import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Restaurant } from '@mui/icons-material'
import RestaurantDetails from '../components/Restaurant/RestaurantDeatils'
import Cart from '../components/Cart/Cart'
import Profile from '../components/Profile/Profile'

const CustomerRouter = () => {
  return (
    <div>
       <Navbar/>
       <Routes>
         <Route path='/'element={<Home/>}/>
         <Route path='/account/:register' element={<Home/>} />
         <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/my-profile/*' element={<Profile/>}/>
        </Routes> 
        
    </div>
  )
}
// /my-profile/orders

export default CustomerRouter
