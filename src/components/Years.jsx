import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Years = () => {
  const yearRef = useRef();
  const { searchQ } = useParams();
  const nav = useNavigate();

  const handelChange = () => {
    // year/${yearRef.current.value}
    searchQ
      ? nav(`/search/${searchQ}/year/${yearRef.current.value}`)
      : nav(`/search/bank/year/${yearRef.current.value}`);
  };
  //`/search/${searchRef.current.value}`
  return (
    <div>
      <div className="ms-20 border-b-[1px] mt-4 me-20">
        <div className="topYears flex mb-2 text-left">
          <h2 className="me-2 text-white">Top Years:</h2>
          {Array.from({ length: 8 }, (_, i) => (
            <Link
              className="me-2 hover:text-purple-600"
              key={i}
              to={`/search/${searchQ ? searchQ : "bank"}/year/${1950 + i * 10}`}
            >
              {1950 + i * 10}
            </Link>
          ))}
        </div>
        <div className="">
          <select
            ref={yearRef}
            className="select select-ghost w-full max-w-xs mt-4 mb-3 text-center bg-slate-300"
            onChange={handelChange}
          >
            <option disabled defaultValue className="text-black font-mono">
              Option
            </option>
            {Array.from({ length: 74 }, (_, i) => (
              <option className=" text-black" key={i} value={2023 - i}>
                {2023 - i}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Years;
