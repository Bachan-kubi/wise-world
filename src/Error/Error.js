import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div>
        <h1>404</h1>
        <p>
          Something's missing.
        </p>
        <p>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.{" "}
        </p>
        <button>
          <Link to="/">Back to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
