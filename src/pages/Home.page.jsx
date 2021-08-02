import React from "react";


//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


//config
import TempPoster from "../config/TempPoster.config"

const HomePage = () => {
    return(
        <>
<div className="flex flex-col gap-10">

        <div className="container mx-auto px-4">
         
         <h1 className="text-2xl font-bold text-grey-800 my-3">The best of Entertainment</h1>
           <EntertainmentCardSlider />
       </div>


       <div className="bg-gray-700 py-12">
           <div className="container mx-auto px-4 flex flex-col gap-3">
                 <div className="hidden md:flex">
                      <div className="">
                          <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                          alt="premiere"
                          className="w-full h-full" />
                      </div>
                  </div>
                   <PosterSlider images={TempPoster} title="Premieres" 
                   subtitle="Brand new releases every Friday "
                  isDark />
           </div>

       </div>

</div>
<div className="container mx-auto px-4 my-8">
    <PosterSlider 
    images={TempPoster} 
    title="Online Streaming events" 
    isDark={false}/>

</div>

<div className="container mx-auto px-4 my-8">
    <PosterSlider 
    images={TempPoster} 
    title="Outdoor Events" 
    isDark={false}/>

</div>
        </>
    );
};

export default HomePage;