import { Carousel } from "flowbite";
import React from "react";
const NavBar = () => {
  return (
    <div>
      <div className="upNav">
        <div className="logoAndSearch flex justify-between m-5">
          <h1>logo</h1>
          <div className="form-control">
            <div className="input-group">
              <input   type="text" placeholder="Search…"
                className="input input-bordered input-sm"
              />
              <button className="btn btn-square btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="carousel"> */}
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..."/>
                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..."/>
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..."/>
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..."/>
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..."/>
            </Carousel>    
        </div> 
      {/* </div> */}
      <div className="downNav"></div>
    </div>
    </div>
  );
};

export default NavBar;
