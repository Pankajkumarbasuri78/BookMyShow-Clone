import React from "react";
import {Route} from "react-router-dom"; //import Route

//layout
import MovieLayout from "../layouts/Movie.layout";


//we will return whole route
const MovieHOC = ({component : Component, ...rest }) => {
    //const Component = component;
    
    return(
    <>
       <Route {...rest}
       component= {(props) => (
           <MovieLayout>
               <Component {...props} />
           </MovieLayout>
       )} />     
    </>
    );
};

export default MovieHOC;