import React, {useState} from "react";
//React context stores the data globally
//create a context
export const MovieContext = React.createContext();

const MovieProvider = ({children}) => {


    const [movie,setMovie] = useState({
        id:0,
        original_title:"",
        overview:"",
        backdrop_path:"",
        poster_path:"",

    });

    return <MovieContext.Provider value={{movie,setMovie}}>
        {children}
    </MovieContext.Provider>
};
export default MovieProvider;