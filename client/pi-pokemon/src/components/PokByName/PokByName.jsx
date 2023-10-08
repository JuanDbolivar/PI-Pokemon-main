import "./PokByName.css";
import { useSelector } from "react-redux"; //* con este useSelector yo leo el estado global y extrago lo que requiero
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PokByName() {
  const { pokemonByName } = useSelector((state) => state.pokemoName);
  const { name } = useParams();

  return (
    <>
      <Link to={`/detail/${pokemonByName.id}`}>
        <div>
          <img src={pokemonByName.imagen} alt="pokemon" />
          <h1>{pokemonByName.nombre}</h1>
          <h3>{pokemonByName.types.join(", ")}</h3>
        </div>
      </Link>
    </>
  );
}

export default PokByName;
