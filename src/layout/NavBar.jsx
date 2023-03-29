import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="upNav">
        <div className="logoAndSearch">
          <h1>logo</h1>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
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
      </div>
      <div className="downNav"></div>
    </div>
  );
};

export default NavBar;
