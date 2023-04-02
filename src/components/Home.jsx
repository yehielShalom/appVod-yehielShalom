import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Years from "./years";

const Home = () => {

  const [movies, setMovies] = useState([]);
  const { searchQ, YYYY } = useParams();


  const getData = async () => {
    const URL = `https://www.omdbapi.com/?s=${searchQ ? searchQ : "bank"}${
      YYYY ? "&y=" + YYYY : ""
    }&apikey=8ec4e915`;
    const { data } = await axios.get(URL);

    setMovies(data.Search);
  };


  useEffect(() => {
    getData();
  }, [searchQ, YYYY]);


  return (
    <div>
      <Years />
      <div className="grid md:grid-cols-4 gap-6 grid-cols-1 sm:grid-cols-2 mt-6 p-6">
        {movies &&
          movies.map((movie, index) => (
            <Link key={index} to={`/video/${movie.imdbID}`}>
              <img className="rounded" src={movie.Poster} alt={movie.Title} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
