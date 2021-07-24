
import React from "react";

//HOC

import DefaultHOC from "./HOC/default.HOC";

//import Home coponent
import HomePage from "./pages/Home.page";


// Import css files        import globally
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
   <>
     <DefaultHOC path="/" exact component= {HomePage} />
   </>
  );
}

export default App;
