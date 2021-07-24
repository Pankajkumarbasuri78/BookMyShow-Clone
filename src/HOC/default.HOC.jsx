import React from "react";
import {Route} from "react-router-dom"; //import Route

//layout
import Defaultlayout from "../layouts/Default.layout";


//we will return whole route
const DefaultHOC = ({component : Component, ...rest }) => {
    //const Component = component;
    
    return(
    <>
       <Route {...rest}
       component= {(props) => (
           <Defaultlayout>
               <Component {...props} />
           </Defaultlayout>
       )} />     
    </>
    );
};

export default DefaultHOC;