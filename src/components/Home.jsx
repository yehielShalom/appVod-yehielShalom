import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState([]);
  const res = async function () {
    let { data } = await axios.get(
      `https://www.omdbapi.com/?s=bank&amp;y=2020&apikey=8ec4e915`
    );
    setSearch(data.Search);
  };
  console.log(search);
  useEffect(() => {
    res();
  }, []);
  return (
    <div>
      <p> home</p>
    </div>
  );
};

export default Home;
