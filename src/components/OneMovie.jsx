import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OneMovie = () => {
  const { id } = useParams(); 
  const { searchQ } = useParams(); 
  const [movie, setMovie] = useState([]);
  const [URL, setURL] = useState("");

  const getData = async () => {
    const { data } = await axios.get(
      `https://omdbapi.com/?i=${id}&apikey=8ec4e915`
    );
    setMovie(data)
    console.log(data);
    console.log(id);
  };
  //{`https://omdbapi.com/?i=${id}&apikey=8ec4e915`}

useEffect(()=>{
    getData()
},[])

  return <div className="flex">
    {movie.Title}
    <img src={movie.Poster}/>
    <Link to={`/search/${searchQ}`}>back</Link>
  </div>;
};

export default OneMovie;
