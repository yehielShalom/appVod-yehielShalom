import { Carousel } from "flowbite-react";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../components/Home";

const NavBar = () => {
  const searchRef = useRef();
  const nav = useNavigate()
const handleClick=()=>{
  nav(`search/${searchRef.current.value}`)
  };

 // `https://www.omdbapi.com/?s=${nameCat}&amp;y=2020&apikey=8ec4e915`



  return (
    <div>
      <div className="upNav">
        <div className="logoAndSearch flex justify-between m-5">
          <Link to={"/"}>logo</Link>
          <div className="form-control">
            <div className="input-group">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered input-sm"
              />
              <button
                onClick={() => {
                  handleClick();
                }}
                className="btn btn-square btn-sm"
              >
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
        {/* -------------------------------- */}
        {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              className="h-[600px] xl:w-[1900] w-[800] md:h-[1500]"
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              className="h-[600px] xl:w-[1900] w-[800] md:h-[1500]"
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              className="h-[600px] xl:w-[1900] w-[800] md:h-[1500]"
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />{" "}
            className="h-[600px] xl:w-[1900] w-[800] md:h-[1500]"
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div> */}
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            {/* <img
              className="h-[1000px] xl:w-[1600] w-[600] md:h-[1300]"
              src="https://tse2.mm.bing.net/th?id=OIP.QwSGzGGEdiYUjtbO8e5m9AHaEK&pid=Api&P=0"
              alt="..."
            /> */}
            <img
              className="h-[600px] w-full md:h-[1500]"
              src="https://tse2.mm.bing.net/th?id=OIP.QwSGzGGEdiYUjtbO8e5m9AHaEK&pid=Api&P=0"
              alt="..."
            />
            {/* <img
              className="h-[600px] w-full md:h-[1500]"
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            /> */}
          </Carousel>
        </div>
        <div className="downNav"></div>
      </div>
    </div>
  );
};
export default NavBar;
