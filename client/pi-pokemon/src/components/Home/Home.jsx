import "./Home.css";
import Cards from "../Cards/Cards";
import Loading from "../Loading/Loading";
import ApiPokemon from "../ApiPokemon/ApiPokemon";
import PokemonFiltered from "../PokemonFiltered/PokemonFiltered";
import axios from "axios";
import { SortPokemons } from "../../handlers/SortName/SortPokemons";
import { HandlersHome } from "../../handlers/Home/HandlersHome";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokemon } from "../../redux/counters/Pokemon/pokemonSlice";
import {
  setApiPokemon,
  setApiPokemonCopia,
} from "../../redux/counters/Pokemon/pokemonSlice";

function Home() {
  const dispatch = useDispatch();
  const { handlerFilter, buttonrFilter, handlerBorrar } = HandlersHome();
  const {
    handlerSort,
    handlerOriginal,
    handlerSortZa,
    handlerSortTotal,
    handlerSortTotalZa,
    handlerSortDb,
    handlerSortZaDb,
    handlerOriginalDb,
  } = SortPokemons();

  const [isOk, setIsOk] = useState(false);
  const [db, setDb] = useState(false);
  const [api, setApi] = useState(false);
  const [sort, setSort] = useState(false);

  const { tipos } = useSelector((state) => state.types);
  const { pokemons, pokemonsFiltered, pokemonsCopia } = useSelector(
    (state) => state.pokemon
  );

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

  const handlerSortState = () => {
    setSort(true);
  };

  const handlerSortFalse = () => {
    setSort(false);
  };

  useEffect(() => {
    dispatch(setPokemon(pokemonsCopia));
  }, []);

  useEffect(() => {
    //llama los pokemones de la base de datos
    const pokeDb = async () => {
      try {
        const { data } = await axios("http://localhost:3001/poquemons/db");
        if (data) {
          dispatch(setApiPokemon(data)); //pokemons de la base de datos
          dispatch(setApiPokemonCopia(data));
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
                  <button
                    onClick={() => {
                      handlerOriginal();
                      handlerSortFalse();
                    }}
                  >
                    Original
                  </button>

                  <button
                    onClick={() => {
                      handlerSortTotal();
                      handlerSortState();
                    }}
                  >
                    Orden A-Z
                  </button>

                  <button
                    onClick={() => {
                      handlerSortTotalZa();
                      handlerSortState();
                    }}
                  >
                    Orden Z-A
                  </button>

                  {!sort && <ApiPokemon />}
                  <Cards />
                </>
              )}

              {api && (
                <>
                  <button
                    onClick={() => {
                      handlerOriginal();
                    }}
                  >
                    Original API
                  </button>

                  <button
                    onClick={() => {
                      handlerSort();
                    }}
                  >
                    Orden API A-Z
                  </button>

                  <button
                    onClick={() => {
                      handlerSortZa();
                    }}
                  >
                    Orden API Z-A
                  </button>
                  <Cards />
                </>
              )}
              {db && (
                <>
                  <button
                    onClick={() => {
                      handlerOriginalDb();
                    }}
                  >
                    OriginalDB
                  </button>

                  <button
                    onClick={() => {
                      handlerSortDb();
                    }}
                  >
                    OrdenDB A-Z
                  </button>

                  <button
                    onClick={() => {
                      handlerSortZaDb();
                    }}
                  >
                    OrdenDB Z-A
                  </button>
                  <ApiPokemon />
                </>
              )}
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
