import "./Home.css";
import Cards from "../Cards/Cards";
import Loading from "../Loading/Loading";
import axios from "axios";
import { HandlersHome } from "../../handlers/Home/HandlersHome";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setPokemon } from "../../redux/counters/Pokemon/pokemonSlice";
import { setApiPokemon } from "../../redux/counters/Pokemon/pokemonSlice";
import ApiPokemon from "../ApiPokemon/ApiPokemon";
import PokemonFiltered from "../PokemonFiltered/PokemonFiltered";

function Home() {
  const dispatch = useDispatch();
  const { handlerFilter, buttonrFilter, handlerBorrar } = HandlersHome();

  const [isOk, setIsOk] = useState(false);
  const [db, setDb] = useState(false);
  const [api, setApi] = useState(false);

  const { tipos } = useSelector((state) => state.types);
  const { pokemons, pokemonsFiltered } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (pokemons.length) {
      setIsOk(true);
    }
  }, [pokemons]);

  const handlerApi = () => {
    setApi(true);
    setDb(false);
  };

  const handlerDb = () => {
    setDb(true);
    setApi(false);
  };

  const handlerAll = () => {
    setApi(false);
    setDb(false);
  };

  // useEffect(() => {
  //   // sirve para llamar a los pokemones otra vez, cada que se recargue la pagina
  //   if (pokemons.length === 0) {
  //     const LandingToHome = async () => {
  //       try {
  //         const { data } = await axios("http://localhost:3001/poquemons/");
  //         if (data) {
  //           dispatch(setPokemon(data));
  //           console.log("data", data);
  //         }
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };
  //     LandingToHome();
  //   }
  // }, []);

  useEffect(() => {
    //llama los pokemones de la base de datos
    const pokeDb = async () => {
      try {
        const { data } = await axios("http://localhost:3001/poquemons/db");
        if (data) {
          dispatch(setApiPokemon(data)); //pokemons de la base de datos
        }
      } catch (error) {
        console.error("error", error.message);
      }
    };
    pokeDb();
  }, []);

  return (
    <>
      {isOk ? (
        <>
          <button onClick={handlerBorrar}>Borrar filtro</button>
          <button onClick={buttonrFilter}>Filtrar</button>
          <select id="types" name="types" onChange={handlerFilter}>
            <optgroup label="Filtrar pokemons por tipo">
              {tipos.map((t) => (
                <option key={t.id} value={t.nombre}>
                  {t.nombre}
                </option>
              ))}
            </optgroup>
          </select>
          {pokemonsFiltered.length ? (
            <PokemonFiltered />
          ) : (
            <>
              <button onClick={handlerAll}>All pokwmons</button>
              <button onClick={handlerDb}>From DB</button>
              <button onClick={handlerApi}>From Api</button>
              <hr />

              {!api && !db && (
                <>
                  <ApiPokemon />
                  <Cards />
                </>
              )}

              {api && <Cards />}
              {db && <ApiPokemon />}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
