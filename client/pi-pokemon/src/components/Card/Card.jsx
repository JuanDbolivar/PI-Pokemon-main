import "./Card.css";
import { Link } from "react-router-dom";

function Card({ pok }) {
  const { id, nombre, types, imagen } = pok;
  const tipo = types.join(", ");

  return (
    <>
      <hr />
      <div className="cardCon">
        <Link to={`/detail/${id}`}>
          <div className="card">
            <img src={imagen} alt="pokemon image" />
            <h1>{nombre}</h1>
            <h3>TIPO: {tipo}</h3>
          </div>
        </Link>
      </div>
      <hr />
    </>
  );
}

export default Card;
