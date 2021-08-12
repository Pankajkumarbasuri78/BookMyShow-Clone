//infoemation part of poster
import React, {useContext} from "react";


//context
import { MovieContext } from "../../context/Movie.Context";

const Movieinformation = () => {
    const {movie} =useContext(MovieContext);
    //const genres = movie.genres && movie.genres.map(({name}) => name).join(", ");
    const genres = movie.genres?.map(({name}) => name).join(", ");
//this technique is optional chaining


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
                <h1 className="hidden lg:block text-white lg:text-5xl font-bold">{movie.original_title}</h1>
                
                {/*english and all detail */}
                <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
                  <div className="text-white font-light flex flex-col gap-2">
                      <div className="flex flex-center gap-1 md:px-4">
                          <h4>4k &bull; {movie.original_language} </h4>
                          
                      </div>
                      <h4 className="md:px-4">{(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; 16+ </h4>
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
