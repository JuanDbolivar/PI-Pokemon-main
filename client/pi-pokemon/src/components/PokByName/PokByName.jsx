import "./PokByName.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; //* con este useSelector yo leo el estado global y extrago lo que requiero
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

function PokByName() {
  const { pokemonByName } = useSelector((state) => state.pokemoName);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokemonByName) {
      setLoading(false);
    }
  }, [pokemonByName]);

  return loading ? (
    <Loading />
  ) : (
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
