import { Divider, FormControl, Grid, RadioGroup, Typography, FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from "./MenuCard";
const categories = [
    "pizza",
    "biryani",
    "burger",
    "rice",
    "chiken"
]

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegtarian", value: "vegtarian" },
    { label: "Non-Vegtarian", value: "non_vegtarian" },
    { label: "Seasonal", value: "seasonal" }
]

const menu= [1,1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }
    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2} lg={12}>
                        <Grid item xs={12} >
                            <img className="w-full h-[40vh] object-cover" src="https://img.freepik.com/free-photo/vintage-bistro-exterior-with-old-chairs_23-2149366407.jpg?t=st=1727763615~exp=1727767215~hmac=0439413ddf07149594c31e2a30db12ad6555ec4e596e525cfee84525e2502408&w=1060" alt="" />

                        </Grid>

                    </Grid>
                    <Grid container spacing={2} lg={12}>
                        <Grid item xs={12} >
                            <img className="w-full h-[40vh] object-cover" src="https://img.freepik.com/free-photo/vintage-bistro-exterior-with-old-chairs_23-2149366407.jpg?t=st=1727763615~exp=1727767215~hmac=0439413ddf07149594c31e2a30db12ad6555ec4e596e525cfee84525e2502408&w=1060" alt="" />

                        </Grid>

                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                    <p className="text-gray-500 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, optio totam voluptates tenetur dolores nesciunt amet nostrum esse veniam qui ab, provident vel sapiente eum dolorum soluta nisi facilis! Nihil?
                    </p>
                    <div className="space-y-3 mt-3">
                        <p className="text-gray-500 flex items-center gap-3">
                            <LocationOnIcon />
                            <span>
                                Indore,MadhyaPradesh
                            </span>
                        </p>
                        <p className="text-gray-500 flex items-center gap-3">
                            <CalendarTodayIcon />
                            <span>
                                Mon- Sun: 9:00 AM - 9:00 PM (Today)

                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
                    <div className="box space-y-5 lg:sticky top-28">
                        <div className="">
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl className="py-10 space-y-5  " component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>

                        </div>
                        <Divider />
                        <div className="">
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className="py-10 space-y-5  " component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {categories.map((item) => (
                                        <FormControlLabel
                                            key={item}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>

                        </div>


                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                   {menu.map((item)=><MenuCard/>)}
                </div>

            </section>

        </div>
    )


}

export default RestaurantDetails