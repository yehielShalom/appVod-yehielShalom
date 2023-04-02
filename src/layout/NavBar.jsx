import { Carousel } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Years from "../components/years";
import { Slide } from "../components/Slide";

const NavBar = () => {
  const nav = useNavigate();

  // `https://www.omdbapi.com/?s=${nameCat}&amp;y=2020&apikey=8ec4e915`

  return (
    <div>
      <div className="upNav">
        {/* -------------------------------- */}
        <Slide
          images={[
            "https://images7.alphacoders.com/676/thumb-1920-676083.jpg",
            "https://images.hdqwalls.com/download/avengers-end-game-4k-banner-cb-1920x1080.jpg",
            "https://dx35vtwkllhj9.cloudfront.net/lionsgateus/prey-for-the-devil/images/regions/us/share.png",
          "http://www.theworkprint.com/wp-content/uploads/2015/03/The-Fast-and-the-Furious-Tokyo-Drift-2006-poster.jpg",]}
        />
        <div className="downNav"></div>
      </div>
    </div>
  );
};
export default NavBar;
