import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Order from './Order';
import Address from './Address';
import Favorite from './Favorite';
import Events from './Events';

const Profile = () => {
  const [openSideBar,setOpenSideBar] = useState(false);
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky pt-16 h=[80vh] lg:w-[20%]'>
            <ProfileNavigation open={openSideBar}/>
        </div>

        <div className='lg:w-[80%]'>
          <Routes >
             <Route path='/' element={<UserProfile/>}/>
             <Route path='/orders' element={<Order/>}/>
             <Route path='/address' element={<Address/>}/>
             <Route path='/favorites' element={<Favorite/>}/>
             <Route path='/events' element={<Events/>}/>
             
             
          </Routes>
        </div>
      
    </div>
  )
}

export default Profile
