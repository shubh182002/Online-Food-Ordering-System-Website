import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
   <Card className='flex justify-between items-center p-5'>
    <div className=' flex items-center space-x-5'>
        <img 
        className='h-16 w-16'
        src="https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?t=st=1727441258~exp=1727444858~hmac=95e8fb00bb410bcd238e8489ec53b808ddb43bd3b04c9c86a6b4ba7b095ad97f&w=740"
        alt=""
         />

         <div>
             <p>Biryani</p>
             <p>$399</p>

         </div>
    </div> 
    <div>
        <Button  className='cursor-not-allowed'> Completed </Button>
    </div>
     
   </Card>
  )
}

export default OrderCard
