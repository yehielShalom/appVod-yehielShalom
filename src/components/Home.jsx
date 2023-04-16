import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { restaurantData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../featutes/data/DataSlice";
import UpNavBar from "../layout/UpNavBar";


const Home = () => {
  const data = useSelector((state) => state.dataReducer.value);
  const dispath = useDispatch();
  const init = () => {
    dispath(setData(restaurantData));
  };
  useEffect(() => {
    init();
  }, [data]);
  return (
    <div>
      <div className="me-20 ms-20 grid md:grid-cols-4 gap-6 grid-cols-1 sm:grid-cols-2 mt-6 p-6">
        {data.map((item, index) => (
          <Link
            key={index}
            className=" hover:shadow-2xl hover:scale-[105%] duration-300"
          >
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
