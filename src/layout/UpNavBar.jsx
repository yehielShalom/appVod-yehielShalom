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
    <div className="upNav absolute z-50 flex justify-between w-screen top-0">
      <div className="logoAndSearch flex justify-between w-screen m-5">
        <Link to={"/"}>
          <div className="italic hover:not-italic text-4xl text-red-600">
            vodApp
          </div>
        </Link>
        <div className="form-control">
          <div className="input-group">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered input-sm"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  searchRef.current.value
                    ? nav(`/search/${searchRef.current.value}`)
                    : nav("/");
                  searchRef.current.value = "";
                }
              }}
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
    </div>
  );
};

export default UpNavBar;
