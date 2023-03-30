import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Years = () => {
  // const { YYYY } = useParams();
  // const [year, setYear] = useState([]);

  const yearRef = useRef();
  const nav = useNavigate();

  const handelChange = () => {
    nav(`/year/${yearRef.current.value}`);
  };

  return (
    <div>
      <div className="flex justify-center border-t-[3px] mt-4 ">
        <select
          ref={yearRef}
          className="select select-ghost w-full max-w-xs mt-4"
          onChange={handelChange}>
          <option value={1990}>1990</option>
          <option value={2000}>2000</option>
          <option value={2010}>2010</option>
          <option value={2020}>2020</option>
        </select>
      </div>
    </div>
  );
};

export default Years;
