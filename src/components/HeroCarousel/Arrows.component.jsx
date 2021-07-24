import React from "react";

export const NextArrow = (props) => {
  //  const {className, style, onClick } =props;    instead of this we can use split 
    return (
    <>
      <div 
         className={props.className} 
         style={{...props.style, backgroundColor:"black"}} 
         onClick={props.onClick} 
         /> {/*props will pass className, style, inClick */}
    </>
    );
};

export const PrevArrow = (props) => {
    return (
        <>
          <div 
            className={props.className} 
            style={{...props.style, backgroundColor:"black"}} 
            onClick={props.onClick} 
          />
        </>
        );
};