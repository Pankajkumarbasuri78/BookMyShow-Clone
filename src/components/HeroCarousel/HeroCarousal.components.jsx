import React, {useEffect,useState} from "react";

//import react slick
import HeroSlider from "react-slick";
import axios from "axios";

//component
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HeroCarousal = () => {
//get images from TMDB create a state
    const [images,setImages] = useState([]);


    useEffect(() => {
        //async call 
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);


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
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow : <NextArrow />,
        prevArrow: <PrevArrow />,
      };
      
     
    return(
    <>
      <div className="lg:hidden">  {/*small and medium devices */}
      <HeroSlider {...settings}>
                 {/*create a map */}
          {
              images.map((image) => (
                <div className=" w-full h-56 md:h-80 py-3">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full object-cover "/>
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
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md "/>
                </div>
              ))
          }
      </HeroSlider>
      </div>
    </>
    );
};

export default HeroCarousal;