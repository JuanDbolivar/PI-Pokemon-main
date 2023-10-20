import "./Card.css";
import { Link } from "react-router-dom";

function Card({ pok }) {
  const { id, nombre, types, imagen } = pok;
  const tipo = types.join(", ");

  return (
    <>
      <div className="cardCon">
        <Link to={`/detail/${id}`}>
          <div className="card">
            <img src={imagen} alt="pokemon" />
            <div className="text">
              <h1>{nombre}</h1>
              <h3> {tipo}</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
