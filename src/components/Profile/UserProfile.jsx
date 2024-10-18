import React from 'react'
import AountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import axios from 'axios'
const UserProfile = () => {
    const handleLogout = async ()=>{
      //const data = await axios.get("http://localhost:8080/api/users/profile"); 
        }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
        
        <div className='flex flex-col items-center justify-center'>
           <AountCircleIcon sx={{fontSize:"9rem"}}/>
           <h1 className='py-5 text-2xl font-semibold'>Code With Shubh</h1>
           <p className='' >Email: shubhamkinkar9@gmail.com</p>
           <Button variant='contained' onClick={handleLogout} sx={{margin:"2rem 0rem"}}>Logout</Button>
        </div>

      
    </div>
  )
}

export default UserProfile
