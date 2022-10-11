import React from "react";
import { useLoaderData } from "react-router-dom";
import Books from "../Books/Books";
import './Home.css'

const Home = () => {
  const allBooks = useLoaderData();
  return (
    <div>
      <h3>this is home - need details.</h3>
      <div className="home">
        {allBooks.data.map((book) => (
          <Books key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
