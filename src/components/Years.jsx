import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Years = () => {
  const { YYYY } = useParams();
  const [year, setYear] = useState([]);
  const yearRef = useRef();
  const nav = useNavigate();
  const handelChange = () => {
    console.log(yearRef.current.value);
  }
  const getYears = async () => {
    let { data } = await axios.get(
      `https://www.omdbapi.com/?s=bank&amp;y=${YYYY}&apikey=8ec4e915`
    );
    console.log(data);
    setYear(data);
  };
  useEffect(() => {
    getYears();
  }, [YYYY]);

  // `https://www.omdbapi.com/?s=bank&amp;y=${}&apikey=8ec4e915`

  return (
    <div>
      <div className="flex justify-center border-t-[3px] mt-4 ">
        <select
          ref={yearRef}
          className="select select-ghost w-full max-w-xs mt-4"
          onChange={handelChange}
        >
          {/* לסדר את השגיאה ששורה 45 עושה */}
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
