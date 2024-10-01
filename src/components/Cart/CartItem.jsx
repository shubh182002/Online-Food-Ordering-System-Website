import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='px-5'>
        <div className='lg:flex items-center lg:space-x-5'>

            <div >
                <img className='w-[5rem] h-[5rem] object-cover' src="https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?t=st=1727769040~exp=1727772640~hmac=ca3d1285b513df8d4df54a70900e229007b1a81b0fb136e21215c544a81e9038&w=740" alt="" />

            </div>
            <div className='flex items-center justify-between lg:w-[70%]'>
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p>Burger</p>
                    <div className='felx justify-between items-center'>
                        <div className='flex items-center space-x-1'>
                            <IconButton>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <div className='w-5 h-5 text-xs flex justify-center items-center'>
                                {5}
                            </div>
                            <IconButton>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </div>

                    </div>

                </div>
                <p>₹1099</p>

            </div>

        </div>
        <div className='pt-3 space-x-2'>
            {[1,1,1].map((item)=><Chip label={"bread"}/>)}

        </div>
      
    </div>
  )
}

export default CartItem
