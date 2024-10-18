import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, IconButton } from "@mui/material";
import { Person } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";

export  const Navbar = () =>{
    const navigate= useNavigate()
    return(
        <div className="px-5 z-50 sticky py-[.8rem] bg-[#6c0125] lg:px-20 flex justify-between">
           
                <div className="lg: mr-10 cursor-pointer flex items-center space-x-4">
                    <li className=" logo font-semibold list-none text-gray-300 text-2xl">
                        Zosh food
                    </li>
                </div>
                <div className="flex items-center space-x-10">
                    <div className="">
                        <IconButton>
                            <SearchIcon sx={{fontSize:"1.5rem"}}/>
                        </IconButton>
                    </div>
                    <div className="">
                      { false?<Avatar sx={{bgcolor:"white",color:"pink.A400"}}> 
                        C
                       </Avatar>:
                       <IconButton onClick={() => navigate("/account/login")}>
                        <Person></Person>
                       </IconButton>}
                    </div>
                    <div className="">
                        <IconButton>
                            <Badge color="primary" badgeContent={5}>
                            <ShoppingCartIcon/>
                            </Badge>
                            
                        </IconButton>
                    </div>
                </div>

           
        </div>
    )
}