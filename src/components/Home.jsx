import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { restaurantData } from "./data";

const Home = () => {
  return (
    <div>
      <div className="me-20 ms-20 grid md:grid-cols-4 gap-6 grid-cols-1 sm:grid-cols-2 mt-6 p-6">
        {restaurantData.map((item, index) => (
          <Link
            key={index}
            className=" hover:shadow-2xl hover:scale-[105%] duration-300">
            <img src={item.main_image} alt="photo"></img>
            <p>{item.name}</p>
            <p>{item.city}</p>
            <p>{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
