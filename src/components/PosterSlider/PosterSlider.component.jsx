import React from "react";
import Slider from "react-slick";
//component
import Poster from "../Poster/Poster.component";

//config
import PosterCarouselsettings from "../../config/PosterCarousel.setting.config";


export const PosterSlider = (props) => {
    return (
        <>
        <div className="flex flex-col items-start my-2">
            <h3 className={`text-2xl fond-bold 
             ${props.isDark ? "text-white" : "text-grey-700"}`}>{props.title}</h3>
            <p className={`text-sm 
             ${props.isDark ? "text-white" : "text-grey-700"}`}>{props.subtitle}</p>
        </div>
          <Slider {...PosterCarouselsettings}>
              {props.images.map((image) => (
                  <Poster {...image} isDark={props.isDark} />
              ))}
         </Slider>  
            
        </>
    );
};

export default PosterSlider;
