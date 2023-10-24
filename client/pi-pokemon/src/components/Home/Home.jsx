import "./Home.css";
import Cards from "../Cards/Cards";
import Loading from "../Loading/Loading";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SortPokemons } from "../../handlers/SortName/SortPokemons";
import { HandlerSortAttack } from "../../handlers/SortAttack/HandlerSortAttack";
import { HandlersHome } from "../../handlers/Home/HandlersHome";
import { ViewsApiDb } from "../../handlers/ViewsApiDb/ViewsApiDb";
import {
  setPokemon,
  setPokemonCopia,
  setApiPokemon,
  setApiPokemonCopia,
} from "../../redux/counters/Pokemon/pokemonSlice";

function Home() {
  const dispatch = useDispatch();
  const { handlerAll, handlerApi, handlerDb } = ViewsApiDb();
  const { handlerFilter, buttonrFilter } = HandlersHome();
  const { handlerSort, handlerSortZa } = SortPokemons();
  const { handlerSortAttack, handlerSortMinAttack } = HandlerSortAttack();

  const [isOk, setIsOk] = useState(false);
  const [filtro, setFiltro] = useState(false);
  const [allPok, setAllPok] = useState(true);
  const [dbPok, setDbPok] = useState(false);
  const [apiPok, setApiPok] = useState(false);
  const [orderAZ, setOrderAZ] = useState(false);
  const [orderZA, setOrderZA] = useState(false);
  const [attackMax, setAttackMax] = useState(false);
  const [attackMin, setAttackMin] = useState(false);

  const { tipos } = useSelector((state) => state.types);
  const { pokemons, pokemonsCopia } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (pokemons.length) {
      setIsOk(true);
    }
  }, [pokemons]);

  useEffect(() => {
    dispatch(setPokemon(pokemonsCopia));
  }, []);

  useEffect(() => {
    const pokeDb = async () => {
      try {
        const { data } = await axios("http://localhost:3001/poquemons/db");
        if (data) {
          const apiIds = data.map((pok) => pok.id); //map database
          const pokemonsIds = pokemonsCopia.map((pok) => pok.id); //map estado redux
          const duplicates = apiIds.filter((id) => !pokemonsIds.includes(id));
          if (duplicates.length > 0) {
            const poke = data.filter((pok) => {
              return duplicates.some((dPok) => pok.id === dPok);
            });
            const allPok = [...poke, ...pokemonsCopia];
            const allPokCopia = [...poke, ...pokemonsCopia];
            dispatch(setPokemon(allPok));
            dispatch(setPokemonCopia(allPokCopia));
            dispatch(setApiPokemon(data)); //pokemons de la base de datos
            dispatch(setApiPokemonCopia(data));
          } else {
            const allPok = [...pokemons];
            const allPokCopia = [...pokemonsCopia];
            dispatch(setPokemon(allPok));
            dispatch(setPokemonCopia(allPokCopia));
            dispatch(setApiPokemon(data)); //pokemons de la base de datos
            dispatch(setApiPokemonCopia(data));
          }
        }
      } catch (error) {
        console.error("error", error.message);
      }
    };
    pokeDb();
  }, []);

  //***************************** PAGINACION *********************** */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirsttPage = indexOfLastPage - itemsPerPage;

  const pokemon = pokemons.slice(indexOfFirsttPage, indexOfLastPage); //esto es lo que hay que renderizar

  const pages = [];
  for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handlerPage = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  const handlerPrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handlerNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  //***************************** PAGINACION *********************** */

  return (
    <>
      {isOk ? (
        <>
          <br />
          <div className="botones">
            <button
              onClick={() => {
                handlerAll();
                setAllPok(true);
                setFiltro(false);
                setDbPok(false);
                setApiPok(false);
                setOrderAZ(false);
                setOrderZA(false);
                setAttackMax(false);
                setAttackMin(false);
              }}
              className={allPok ? "active" : null}
            >
              All pokwmons
            </button>
            <button
              onClick={() => {
                handlerDb();
                setAllPok(false);
                setFiltro(false);
                setDbPok(true);
                setApiPok(false);
                setOrderAZ(false);
                setOrderZA(false);
                setAttackMax(false);
                setAttackMin(false);
              }}
              className={dbPok ? "active" : null}
            >
              From DB
            </button>
            <button
              onClick={() => {
                handlerApi();
                setAllPok(false);
                setFiltro(false);
                setDbPok(false);
                setApiPok(true);
                setOrderAZ(false);
                setOrderZA(false);
                setAttackMax(false);
                setAttackMin(false);
              }}
              className={apiPok ? "active" : null}
            >
              From Api
            </button>
            <button
              onClick={() => {
                handlerSort();
                setAllPok(false);
                setFiltro(false);
                setDbPok(false);
                setApiPok(false);
                setOrderAZ(true);
                setOrderZA(false);
                setAttackMax(false);
                setAttackMin(false);
              }}
              className={orderAZ ? "active" : null}
            >
              Orden A-Z
            </button>
            <button
              onClick={() => {
                handlerSortZa();
                setAllPok(false);
                setFiltro(false);
                setDbPok(false);
                setApiPok(false);
                setOrderAZ(false);
                setOrderZA(true);
                setAttackMax(false);
                setAttackMin(false);
              }}
              className={orderZA ? "active" : null}
            >
              Orden Z-A
            </button>
            <button
              onClick={() => {
                handlerSortAttack();
                setAllPok(false);
                setFiltro(false);
                setDbPok(false);
                setApiPok(false);
                setOrderAZ(false);
                setOrderZA(false);
                setAttackMax(true);
                setAttackMin(false);
              }}
              className={attackMax ? "active" : null}
            >
              Orden ataque mayor
            </button>
            <button
              onClick={() => {
                handlerSortMinAttack();
                setAllPok(false);
                setFiltro(false);
                setDbPok(false);
                setApiPok(false);
                setOrderAZ(false);
                setOrderZA(false);
                setAttackMax(false);
                setAttackMin(true);
              }}
              className={attackMin ? "active" : null}
            >
              Orden menor ataque
            </button>
            <button
              onClick={() => {
                buttonrFilter();
                setAllPok(false);
                setFiltro(true);
                setDbPok(false);
                setApiPok(false);
                setOrderAZ(false);
                setOrderZA(false);
                setAttackMax(false);
                setAttackMin(false);
              }}
              className={filtro ? "active" : null}
            >
              Filtrar
            </button>
            <select
              id="types"
              name="types"
              onChange={handlerFilter}
              className="select"
            >
              <optgroup label="Filtrar pokemons por tipo">
                <option value=""> All types</option>
                {tipos.map((t) => (
                  <option key={t.id} value={t.nombre}>
                    {t.nombre}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
          <div className="pagination">
            <ul className="pageNumbers">
              <li>
                <button
                  onClick={handlerPrev}
                  disabled={currentPage == pages[0] ? true : false}
                >
                  Prev
                </button>
              </li>
              {pages.map((number) => {
                if (
                  number < maxPageNumberLimit + 1 &&
                  number > minPageNumberLimit
                ) {
                  return (
                    <li
                      key={number}
                      id={number}
                      onClick={handlerPage}
                      className={currentPage == number ? "active" : null}
                    >
                      {number}
                    </li>
                  );
                } else {
                  return null;
                }
              })}
              <li>
                <button
                  onClick={handlerNext}
                  disabled={
                    currentPage == pages[pages.length - 1] ? true : false
                  }
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
          <Cards pokemon={pokemon} />
          <div className="pagination">
            <ul className="pageNumbers">
              <li>
                <button
                  onClick={handlerPrev}
                  disabled={currentPage == pages[0] ? true : false}
                >
                  Prev
                </button>
              </li>
              {pages.map((number) => {
                if (
                  number < maxPageNumberLimit + 1 &&
                  number > minPageNumberLimit
                ) {
                  return (
                    <li
                      key={number}
                      id={number}
                      onClick={handlerPage}
                      className={currentPage == number ? "active" : null}
                    >
                      {number}
                    </li>
                  );
                } else {
                  return null;
                }
              })}
              <li>
                <button
                  onClick={handlerNext}
                  disabled={
                    currentPage == pages[pages.length - 1] ? true : false
                  }
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
