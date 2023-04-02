import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Years = () => {
  const yearRef = useRef();
  const {searchQ} =useParams()
  const nav = useNavigate();

  const handelChange = () => {
    // year/${yearRef.current.value}
    searchQ ?
    nav(`/search/${searchQ}/year/${yearRef.current.value}`):
    nav(`/search/bank/year/${yearRef.current.value}`);
  };
  //`/search/${searchRef.current.value}`
  return (
    <div>
      <div className=" border-t-[3px] mt-4 ">
        <div className="topYears flex mb-2 ms-20 text-left">
          <h5 className="ms-2">top years:</h5>
        <p className="me-2 hover:text-purple-600">{!searchQ ? <Link to={`/search/bank/year/1950`}>1950</Link> :<Link to={`/search/${searchQ}/year/1950`}>1950</Link>}</p>
        <p className="me-2 hover:text-purple-600">{!searchQ ? <Link to={`/search/bank/year/1960`}>1960</Link> :<Link to={`/search/${searchQ}/year/1960`}>1960</Link>}</p>
        <p className="me-2 hover:text-purple-600">{!searchQ ? <Link to={`/search/bank/year/1970`}>1970</Link> :<Link to={`/search/${searchQ}/year/1970`}>1970</Link>}</p>
        <p className="me-2 hover:text-purple-600">{!searchQ ? <Link to={`/search/bank/year/1980`}>1980</Link> :<Link to={`/search/${searchQ}/year/1980`}>1980</Link>}</p>
        <p className="me-2 hover:text-purple-600">{!searchQ ? <Link to={`/search/bank/year/1990`}>1990</Link> :<Link to={`/search/${searchQ}/year/1990`}>1990</Link>}</p>
        <p className="me-2 hover:text-purple-600">{!searchQ ? <Link to={`/search/bank/year/2000`}>2000</Link> :<Link to={`/search/${searchQ}/year/2000`}>2000</Link>}</p>
        <p className="me-2 hover:text-purple-600">{!searchQ ? <Link to={`/search/bank/year/2010`}>2010</Link> :<Link to={`/search/${searchQ}/year/2010`}>2010</Link>}</p>
        <p className="me-2 hover:text-purple-600">{!searchQ ? <Link to={`/search/bank/year/2020`}>2020</Link> :<Link to={`/search/${searchQ}/year/2020`}>2020</Link>}</p>
        </div>
        <div className="flex justify-center">
        <select 
          ref={yearRef}
          className="select select-ghost w-full max-w-xs mt-4 justify-center"
          onChange={handelChange}>
          <option value={1990}>1990</option>
          <option value={2000}>2000</option>
          <option value={2010}>2010</option>
          <option value={2020}>2020</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default Years;
