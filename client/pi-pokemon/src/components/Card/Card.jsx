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
            {imagen ? (
              <img src={imagen} alt="pokemon" />
            ) : (
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825663guo45.png"
                alt="pokemon sin imagen"
              />
            )}
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
