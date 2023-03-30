import { Carousel } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Years from "../components/years";

const NavBar = () => {
  const nav = useNavigate();

  // `https://www.omdbapi.com/?s=${nameCat}&amp;y=2020&apikey=8ec4e915`

  return (
    <div>
      <div className="upNav">
        {/* -------------------------------- */}
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            <img
              className="h-[1000px] xl:w-[1600] w-[600] md:h-[1300]"
              src="https://tse2.mm.bing.net/th?id=OIP.QwSGzGGEdiYUjtbO8e5m9AHaEK&pid=Api&P=0"
              alt="..."
            />
            <img
              className="h-[600px] w-full md:h-[1500]"
              src="https://tse2.mm.bing.net/th?id=OIP.QwSGzGGEdiYUjtbO8e5m9AHaEK&pid=Api&P=0"
              alt="..."
            />
            <img
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
            />
          </Carousel>
        </div>
        <div className="downNav"></div>
      </div>
    </div>
  );
};
export default NavBar;
