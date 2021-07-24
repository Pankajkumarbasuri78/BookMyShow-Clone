import React from "react";

 //Components
 import Navbar from "../components/Navbar/navbar.component";

 import HeroCarousal from "../components/HeroCarousel/HeroCarousal.components";
 

const Defaultlayout = (props) => {
    return( 
    <>
        <Navbar />
        <HeroCarousal />
        {props.children}  
    </>
    );
};

export default Defaultlayout;