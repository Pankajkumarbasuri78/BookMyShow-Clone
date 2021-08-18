import React, {useContext,useState, useEffect} from "react";
import {FaCcVisa, FaCcApplePay} from "react-icons/fa"
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";


//component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Castmember from "../components/Castmember/Castmember.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//import Crewmember from "../components/crewmember/crewmember.component";


//config
//import TempPoster from "../config/TempPoster.config"


//context
import { MovieContext } from "../context/Movie.Context";




const Movie= () => {

  const {id} =useParams();
  const {movie} =useContext(MovieContext);
  const [cast, setCast] = useState([]);
  //const [crew, setCrew] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const requestCast = async() =>{
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);

    };
    requestCast();
  },[id]);

 /*  useEffect(() => {
    const requestCrew = async() =>{
      const getCrew = await axios.get(`/movie/${id}/credits`);
      setCrew(getCrew.data.crew);

    };
    requestCrew();
  },[id]);  */


  useEffect(() => {
    const requestSimilarMovies = async () => {
        const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
        setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
}, [id]);

useEffect(() => {
  const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommended(getRecommendedMovies.data.results);
  };
  requestRecommendedMovies();
}, [id]);


    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };

      //setting for cast&crew
      const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <>
        <MovieHero />
        {/*description of the movie page */}
        <div className="my-12 container px-4 lg:w-3/4 lg:ml-20">
            <div className="flex flex-col items-start gap-3 ">
              <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
              <p>{movie.overview}</p>
            </div>
            <div>
                <hr className="my-8" /> {/*line */}
            </div>

            {/*applicable offers */}
            <div className="my-8">
                <h1 className="text-3xl text-gray-800 font-bold mb-3">Applicable offers</h1>
                <div className="flex flex-col gap-3 lg:flex-row ">
                  <div className="flex items-start gap-2 bg-red-100 p-3 border-yellow-200 border-dashed border-2 rounded-md">
                      <div className="w-7 h-7"> 
                         <FaCcVisa className="w-full h-full"/>
                      </div>
                      <div className="flex flex-col items-start">
                          <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                          <p className="text-gray-600">Get 50% off up to INR 150 with RuPay cards on BookMyShow Stream</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-2 bg-red-100 p-3 border-yellow-200 border-dashed border-2 rounded-md">
                      <div className="w-7 h-7"> 
                         <FaCcApplePay className="w-full h-full"/>
                      </div>
                      <div className="flex flex-col items-start">
                          <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                          <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                      </div>
                  </div>
                </div>
            </div>

          
            <div>
                <hr className="my-8" /> {/*line */}
            </div> 

          {/*castmember image */}
          <div className="my-8">
             <h2 className="text-gray-800 font-medium text-2xl mb-4">Cast</h2>
             
               <Slider {...settingsCast}>
               {cast.map((castdata) => (
               <Castmember 
               image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
               castname={castdata.original_name}
               role={castdata.character}/>
               ))}
               </Slider>
                 
          </div>

            <div>
                <hr className="my-8" /> {/*line */}
            </div> 
            
           {/**  {/*Crewmember image 
            <div className="my-8">
             <h2 className="text-gray-800 font-medium text-2xl mb-4">Crew</h2>
             <Slider {...settingsCast}>
             {crew.map((crewdata) => (
                 <Crewmember 
                 image={`https://image.tmdb.org/t/p/original${crewdata.profile_path}`}
                 title={crewdata.original_name}
                 role={crewdata.character}/>
               ))}
             </Slider>
          </div>*/}

          {/*<div>
                <hr className="my-8" /> 
              </div>     {/*line */}
          

          <div className="my-8">
              <PosterSlider 
              config={settings}
              images={similarMovies} 
              title="You Might Also Like" 
              isDark={false}/>
          </div>


          <div>
                <hr className="my-8" /> {/*line */}
            </div> 

          <div className="my-8">
              <PosterSlider 
              config={settings}
              images={recommended} 
              title="Recommended Movies" 
              isDark={false}/>
          </div>
        </div>
        </>
    );
};

export default Movie;
