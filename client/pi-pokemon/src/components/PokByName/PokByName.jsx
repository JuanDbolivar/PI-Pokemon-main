import "./PokByName.css";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; //* con este useSelector yo leo el estado global y extrago lo que requiero

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
      <div className="nameContainer">
        <img
          src="https://img.freepik.com/premium-photo/moon-clouds-wallpaper_802639-6388.jpg?w=740"
          alt="background"
          className="imgname"
        />
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1cfff2-db8d-44cd-8a13-cb2a4162fae6/dd2zouo-047f7b3f-b895-43ac-82a4-abb6ca12c52a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWNmZmYyLWRiOGQtNDRjZC04YTEzLWNiMmE0MTYyZmFlNlwvZGQyem91by0wNDdmN2IzZi1iODk1LTQzYWMtODJhNC1hYmI2Y2ExMmM1MmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EFI6YQ0acRLpYHzupMAxV_N4KMcpNWT-_3RJ4TV-4eU"
          alt="nav-footer"
          className="imgNav"
        />

        <Link to={`/detail/${pokemonByName.id}`} className="nameCon">
          <div className="name">
            <img src={pokemonByName.imagen} alt="pokemon" />
            <div className="texto">
              <h1>{pokemonByName.nombre}</h1>
              <h3>{pokemonByName.types.join(", ")}</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PokByName;
