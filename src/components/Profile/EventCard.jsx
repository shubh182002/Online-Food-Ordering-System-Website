import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
         <CardMedia 
         sx={{height:345}}
         image='https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400'
        />
        <CardContent>
            <Typography variant='h5' >
                Indian Fast Food 
            </Typography>
            <Typography variant='body2' >
                50 % Off on your first order                 
            </Typography>
            <div className='py-2 space-y-2'>
                <p >{"Mumbai"}</p>
                <p className='text-sm text-blue-500 '>Fabruary 14, 2024 12:00 AM</p>
                <p className='text-sm text-red-500 '>Fabruary 14, 2024 12:00 AM</p>

            </div>
        </CardContent>
       {false &&  <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions> }
      </Card>
    </div>
  )
}

export default EventCard
