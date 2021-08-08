import React from "react";
import {FaCcVisa, FaCcApplePay} from "react-icons/fa"



//component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Castmember from "../components/Castmember/Castmember.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import Crewmember from "../components/crewmember/crewmember.component";


//config
import TempPoster from "../config/TempPoster.config"


const Movie= () => {

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

    return (
        <>
        <MovieHero />
        {/*description of the movie page */}
        <div className="my-12 container px-4 lg:w-3/4 lg:ml-20">
            <div className="flex flex-col items-start gap-3 ">
              <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
              <p>Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.</p>
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
             <div className="flex flex-wrap gap-4">
                 <Castmember image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                  castname="Ben Affleck"
                  role="Batman"/>
                  <Castmember image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                  castname="Ben Affleck"
                  role="Batman"/>
                  <Castmember image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                  castname="Ben Affleck"
                  role="Batman"/>
                  <Castmember image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                  castname="Ben Affleck"
                  role="Batman"/>
              </div>
          </div>

            <div>
                <hr className="my-8" /> {/*line */}
            </div> 

            <div className="my-8">
             <h2 className="text-gray-800 font-medium text-2xl mb-4">Crew</h2>
             <div className="flex flex-wrap gap-4">
                 <Crewmember image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                  title="Ben Affleck"
                  role="Batman"/>
                  <Crewmember image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                  title="Ben Affleck"
                  role="Batman"/>
                  <Crewmember image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                  title="Ben Affleck"
                  role="Batman"/>
                  <Crewmember image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                  title="Ben Affleck"
                  role="Batman"/>
              </div>
          </div>

          <div>
                <hr className="my-8" /> {/*line */}
            </div> 

          <div className="my-8">
              <PosterSlider 
              config={settings}
              images={TempPoster} 
              title="You Might Also Like" 
              isDark={false}/>
          </div>


          <div>
                <hr className="my-8" /> {/*line */}
            </div> 

          <div className="my-8">
              <PosterSlider 
              config={settings}
              images={TempPoster} 
              title="BMS XCLUSIV" 
              isDark={false}/>
          </div>
        </div>
        </>
    );
};

export default Movie;
