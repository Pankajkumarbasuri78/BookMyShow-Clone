//infoemation part of poster
import React from 'react'

const Movieinformation = () => {
    return (
        <>
            <div className="flex flex-col gap-3 lg:gap-6">
                {/*premiere information */}
                <div className="flex items-center gap-3 md:px-4">
                    <div className="w-40 h-18">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" 
                        alt="premiereimage"
                        className="w-full h-full" />
                    </div>
                    <span className="bg-gray-700 p-1 text-xs text-white rounded-md">Streaming Now </span>
                </div>

                {/*title of the movie */}
                <h1 className="hidden lg:block text-white lg:text-5xl font-bold">Zack Snyder`s Justice League</h1>
                
                {/*english and all detail */}
                <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
                  <div className="text-white font-light flex flex-col gap-2">
                      <div className="flex flex-center gap-1 md:px-4">
                          <h4>English &bull; Languages: </h4>
                          <h4 className="text-red-600 text-bold"> Audio(1), Subtitle(1)</h4>
                      </div>
                      <h4 className="md:px-4">4h 1m • Action,Adventure,Fantasy 16+ • 18 Mar,2021</h4>
                  </div>

                  {/*buttons */}
                  <div className="flex items-center gap-3 md:w-screen md:px-4 lg:w-full">
                      <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">Rent ₹149</button>
                      <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">Buy ₹689</button>
                  </div>
                </div>

            </div>
        </>
    );
};

export default Movieinformation;
