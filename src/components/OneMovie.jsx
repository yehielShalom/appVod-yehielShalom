import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UpNavBar from "../layout/UpNavBar";

const OneMovie = () => {
  const { id } = useParams();
  const { searchQ } = useParams();
  const [movie, setMovie] = useState([]);
  const [URL, setURL] = useState("");

  const getData = async () => {
    const { data } = await axios.get(
      `https://omdbapi.com/?i=${id}&apikey=8ec4e915`
    );
    setMovie(data);
    console.log(data);
    console.log(id);
  };
  //{`https://omdbapi.com/?i=${id}&apikey=8ec4e915`}

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <UpNavBar />

      <div className="card card-side bg-base-100 shadow-xl m-36">
        <figure>
          <img
            src={movie.Poster}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {movie.Title}</h2>
          <p>Genre : {movie.Genre}</p>
          <p>Plot : {movie.Plot}</p>
          <p>Released : {movie.Released}</p>
          <div className="card-actions justify-end">
          <Link to={`/search/${searchQ}`}>
            <button className="btn btn-primary">click to back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneMovie;
