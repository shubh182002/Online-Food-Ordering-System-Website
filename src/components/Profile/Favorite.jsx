import React from 'react'
import RastaurantCard from '../Restaurant/RestaurantCard'

const Favorite = () => {
  return (
    <div>
         <h1 className='py-5 text-xl font-semibold text-center '>My Favorites</h1>
         <div className='flex flex-wrap gap-3 justify-center'>
            {[1,1,1].map((item)=><RastaurantCard/>) }
         </div>

    </div>
  )
}

export default Favorite
