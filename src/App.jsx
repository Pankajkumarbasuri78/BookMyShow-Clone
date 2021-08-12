
import React from "react";
import axios from "axios";
//HOC

import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//import Home coponent //Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Import css files        import globally
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Asiox default settings
axios.defaults.baseURL ="https://api.themoviedb.org/3";
axios.defaults.params={};//default  empty object
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;//this is for parameter globallly then while requesting we only use route 



function App() {
  return (
   <>
     <DefaultHOC path="/" exact component= {HomePage} />
     <MovieHOC path="/movie/:id" exact component= {Movie} />
     <DefaultHOC path="/plays" exact component={Plays} />
   </>
  );
}

export default App;
