import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          src="https://klizos.com/wp-content/uploads/funny-404-error-page-GIF-klizo-solutions.gif"
          alt="not found 404"
          className="w-full"
        />
      </Link>
    </div>
  );
};

export default NotFound404;
