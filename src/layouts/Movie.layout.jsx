import React from "react";


 //Components
 //import Navbar from "../components/Navbar/navbar.component";
 import MovieNavbar from "../components/Navbar/movieNavbar.component";

const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar />
           
            {props.children}  
        </>
    );
};

export default MovieLayout;
