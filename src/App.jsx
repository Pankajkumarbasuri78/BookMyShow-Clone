
import React from "react";

//HOC

import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//import Home coponent //Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

// Import css files        import globally
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {
  return (
   <>
     <DefaultHOC path="/" exact component= {HomePage} />
     <MovieHOC path="/movie/:id" exact component= {Movie} />
   </>
  );
}

export default App;
