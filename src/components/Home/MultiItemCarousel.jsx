import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topMeels } from "./topMeel";
import CarouselItem from "./CarouselItem";
import Slider from "react-slick";

const MultiItemCarousel = () => {
   
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:1000,
        arrows:false
      };
    return (
        <div>
            <Slider {...settings}>
                {topMeels.map((item) => (
                    <CarouselItem
                        key={item.id}  // Ensure this is unique
                        image={item.image}  // Access specific object properties
                        title={item.title}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default MultiItemCarousel;
