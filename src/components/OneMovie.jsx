import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UpNavBar from "../layout/UpNavBar";

const OneMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
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
          <img src={movie.Poster} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {movie.Title}</h2>
          <p>Genre : {movie.Genre}</p>
          <p>Plot : {movie.Plot}</p>
          <p>Released : {movie.Released}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              click to back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneMovie;
