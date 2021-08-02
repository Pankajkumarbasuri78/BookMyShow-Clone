import React from "react";

import { BiShareAlt, BiSearch, BiMenu, BiChevronDown} from "react-icons/bi";

const NavSm = () => {
    return(
        <>
          <div className="text-white flex items-center justify-between" >
              <div>
                  <h3 className="text-xl font-bold">
                      It All Starts Here!
                  </h3>
              </div>
              <div className="w-8 h-8"> {/*like image we use this */}
                  <BiShareAlt className="w=full h=full" />
              </div>
          </div>
        </>
        );

};


const NavLg = () => {
    return (
    <>
      <div class="container mx-auto px-4 flex items-center justify-between">{/*parent div */}{/*groouping */}
          <div className="flex items-center w-1/2 ">
                  <div>
                      <h1 className="text-3xl text-white">book</h1>
                  </div>
              <div className="w-10 h-10">
                 <img 
                  src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-andriod-ticket-png.png" 
                  alt="logo" 
                  className="w-full h-full"/>
             </div>
                  <div>
                      <h1 className="text-3xl text-white pr-3 ">show</h1>
                  </div>

              <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                 <BiSearch/>
                   <input type="search" 
                   className="w-full bg-transparent border-none focus:outline-none " 
                   placeholder=" Search for Movies, Events, Plays, Sports and Activites"/>
              </div>
          </div>
          <div className="flex items center gap-3">
              <span 
                  className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">Bengaluru <BiChevronDown />
              </span>
              <button 
                  className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign in
              </button>
              <div className="w-8 h-8 text-white">
                   <BiMenu className="w-full h-full"/>
              </div>
          </div>
      </div>
    </>
    );
};

const MovieNavbar = () => {
    return( 
    <>
      
      <nav className ="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-gray-800 p-4">
          {/* Tailwind css is writing media query for u and according to the condition 
          we will render the above function */}
          {/*this is for small device*/}
          <div className="md:hidden">
              {/* MOBILE SCREEN */}
              <NavSm /> {/*rendering NavSm */}
          </div>

          <div className="hidden md:block lg:hidden">
              {/* Medium/Tab screen*/}
              <NavSm />
          </div>

          <div className="hidden lg:flex">
              {/* pc/Large screen*/}
              <NavLg />
          </div>

      </nav>
    </>
    );
};

export default MovieNavbar;