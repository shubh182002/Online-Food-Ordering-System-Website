import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RastaurantCard = () =>{
    return(
        <Card className=" w-[18rem]">
            <div className={`${true?"cursor-pointer":"cursor-not-allowed"} relative`}>
                <img
                className="w-full h-[10rem] rounded-t-md object-cover"
                 src="https://img.freepik.com/free-photo/restaurant-hall-with-bright-color-sitting-furniturs-panoramic-windows_114579-1521.jpg?t=st=1727442538~exp=1727446138~hmac=f13ef12961681de7db8f3aa7e7277e6ceacab5299afdac8e969eaed6ef3a8f86&w=740" alt="" />
            
            <Chip  size='small'
            className="absolute top-2 left-2"
            color={true?"success":"error"}
            label={true?"open":"closed"}
            />
            </div>
            <div className="p-4 textPart lg:flex w-full justify-between">
                <div className="space-y-1">
                    <p className="font-semibold text-lg">Indian Fast Food</p>
                    <p className="text-gray-500 text-sm">Craving it all? Dive into our global fla...</p>

                </div>
                <div className="">
                    <IconButton>
                        {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </IconButton>

                </div>

            </div>

        </Card>
    )
} 
export default RastaurantCard;