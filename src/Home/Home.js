import React from "react";
import { useLoaderData } from "react-router-dom";
import Books from "../Books/Books";
import "./Home.css";
import Image from "../img/quiz-blue-banner-3d-style-white_123447-766.jpg";

const Home = () => {
  const allBooks = useLoaderData();
  return (
    <div>
      <div className="home-container">
        <img src={Image} alt="banner" />
        <h2>Test your Skills, Lift yourself Higher.</h2>
      </div>
      <div className="home">
        {allBooks.data.map((book) => (
          <Books key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
