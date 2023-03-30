import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const { searchQ } = useParams();
  const getData = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${
        searchQ ? searchQ : "bank"
      }&amp;y=2020&apikey=8ec4e915`
    );
    setMovies(data.Search);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, [searchQ]);

  return (
    <div className="grid grid-cols-4 gap-6 mt-6 p-6">
      {movies &&
        movies.map((movie, index) => (
          <Link key={index} to={`/search/${searchQ}/video/${movie.imdbID}`}>
            <img className="rounded" src={movie.Poster} alt="bank poster" />
          </Link>
        ))}
    </div>
  );
};

export default Home;
