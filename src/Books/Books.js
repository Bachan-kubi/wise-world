import React from "react";
import { Link} from "react-router-dom";
import "./Books.css";

const Books = ({ book }) => {
  const { name, logo, total, id } = book;
  
//   const navigate= useNavigate();

//   const handlePractice=()=>{
//     navigate(`/quizes/${id}`);
//   }
  return (
    <div className="books">
      <img src={logo} alt="imge" />
      <div className="books-flex">
        <h3>{name}</h3>
        <h3>Total: {total}</h3>
        <Link to={`/quizes/${id}`}>
          <button className="btn-practice">Start Practice</button>
        </Link>
      </div>
    </div>
  );
};

export default Books;
