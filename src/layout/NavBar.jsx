import React from "react";
import { Slide } from "../components/Slide";

const NavBar = () => {
  return (
    <div>
      <div className="upNav">
        {/* -------------------------------- */}
        <Slide
          images={[
            "https://images7.alphacoders.com/676/thumb-1920-676083.jpg",
            "https://images.hdqwalls.com/download/avengers-end-game-4k-banner-cb-1920x1080.jpg",
            "https://dx35vtwkllhj9.cloudfront.net/lionsgateus/prey-for-the-devil/images/regions/us/share.png",
            "http://www.theworkprint.com/wp-content/uploads/2015/03/The-Fast-and-the-Furious-Tokyo-Drift-2006-poster.jpg",
          ]}
        />
      </div>
    </div>
  );
};
export default NavBar;
