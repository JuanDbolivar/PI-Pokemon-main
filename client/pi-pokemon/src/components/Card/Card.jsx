import "./Card.css";
import { Link } from "react-router-dom";

function Card({ pok }) {
  const {
    id,
    nombre,
    types,
    imagen,
  } = pok;
  const tipo = types.join(", ");

  return (
    <>
      <hr />
      <Link to={`/detail/${id}`}>
        <div>
          <img src={imagen} alt="pokemon image" />
          <h1>{nombre}</h1>
          <h3>TIPO: {tipo}</h3>
        </div>
      </Link>
      <hr />
    </>
  );
}

export default Card;
