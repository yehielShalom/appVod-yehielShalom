import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../components/Home";
const UpNavBar = () => {
  const searchRef = useRef();
  const nav = useNavigate();
  const handleClick = () => {
    nav(`/search/${searchRef.current.value}`);
    console.log(searchRef.current.value);
  };

  return (
    <div className="upNav flex justify-between w-screen top-0">
      <div className="logoAndSearch flex justify-center items-center w-screen ms-20  mt-10 me-20 h-[300px] bg-cyan-800">
        <div className="form-control flex ">
          <h1 className="text-white text-2xl mb-2">Find your table for any occasion</h1>
          <div className="input-group ">
            <input
              ref={searchRef}
              type="text"
              placeholder="state, city or town"
              className="input input-bordered me-5"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  searchRef.current.value
                    ? nav(`/search/${searchRef.current.value}`)
                    : nav("/");
                  searchRef.current.value = "";
                }
              }}
            />
            <button onClick={() => {
                handleClick();
              }}
               className="btn btn-error">Let's go</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpNavBar;
