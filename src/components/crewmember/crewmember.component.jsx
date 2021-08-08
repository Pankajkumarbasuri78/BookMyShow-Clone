import React from "react";

const Crewmember = (props) => {
    return (
        <>
        <div className="flex flex-col items-center">
            <div className="w-28 h-28">
                <img src={props.image} 
                alt="crewmember"
                className="w-full h-full rounded-full" />
            </div>
            <h1 className="text-lg text-gray-800">{props.title}</h1>
            <h5 className="text-sm text-gray-500">{props.role}</h5>
        </div>
            
        </>
    )
}

export default Crewmember;
