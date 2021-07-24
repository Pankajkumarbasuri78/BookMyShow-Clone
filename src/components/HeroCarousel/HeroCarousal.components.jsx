import React from "react";

//import react slick
import HeroSlider from "react-slick";


//component
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HeroCarousal = () => {

    const settingLG ={
        arrows:true, 
        autoplay:true, 
        centerMode:true, 
        centerPadding: "300px",
        slidesToShow:1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow : <NextArrow />,
        prevArrow: <PrevArrow />,
     };


    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow : <NextArrow />,
        prevArrow: <PrevArrow />,
      };
      const images =["https://images.unsplash.com/photo-1626841006419-3123f0bc9954?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                     "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
                     "https://images.unsplash.com/photo-1626882750242-526d414ad760?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                     "https://images.unsplash.com/photo-1626815418947-ede2e76fbf7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                     "https://images.unsplash.com/photo-1626854586365-94312f94c8e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                    ];
    return(
    <>
      <div className="lg:hidden">  {/*small and medium devices */}
      <HeroSlider {...settings}>
                 {/*create a map */}
          {
              images.map((image) => (
                <div className=" w-full h-56 md:h-80 py-3">
                    <img src={image} alt="testing" className="w-full h-full object-cover "/>
                </div>
              ))
          }
      </HeroSlider>
      </div>


      <div className="hidden lg:block">
      <HeroSlider {...settingLG}>    {/*large devices */}
          {/*create a map */}
          {
              images.map((image) => (
                <div className=" w-full h-96 px-2 py-3">
                    <img src={image} alt="testing" className="w-full h-full rounded-md "/>
                </div>
              ))
          }
      </HeroSlider>
      </div>
    </>
    );
};

export default HeroCarousal;