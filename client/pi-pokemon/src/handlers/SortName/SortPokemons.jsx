import { useSelector, useDispatch } from "react-redux";
import {
  setPokemon,
  setApiPokemon,
} from "../../redux/counters/Pokemon/pokemonSlice";

export const SortPokemons = () => {
  const dispatch = useDispatch();
  const { pokemons, pokemonsCopia, apiPokemon, apiPokemonCopia } = useSelector(
    (state) => state.pokemon
  );

  const sortPokemonByName = (order) => {
    return (a, b) => {
      const nameA = a.nombre.toUpperCase();
      const nameB = b.nombre.toUpperCase();
      return order * nameA.localeCompare(nameB);
    };
  };

  const handlerSort = () => {
    const sortedPokemon = [...pokemons].sort(sortPokemonByName(1));
    dispatch(setPokemon(sortedPokemon));
  };
  const handlerSortZa = () => {
    const pokemon = [...pokemons].sort(sortPokemonByName(-1));
    dispatch(setPokemon(pokemon));
  };

  const handlerSortTotal = () => {
    let totalPokemon = [...pokemons, ...apiPokemon];

    const apiIds = apiPokemon.map((pok) => pok.id);

    const pokemonsIds = pokemons.map((pok) => pok.id);

    const duplicates = apiIds.filter((id) => pokemonsIds.includes(id));

    if (duplicates.length > 0) {
      totalPokemon = [...pokemons];
      totalPokemon.sort(sortPokemonByName(1));
      dispatch(setPokemon(totalPokemon));
    } else {
      totalPokemon = [...pokemons, ...apiPokemon].sort(sortPokemonByName(1));
      dispatch(setPokemon(totalPokemon));
    }
  };

  const handlerSortTotalZa = () => {
    let totalPokemon = [...pokemons, ...apiPokemon];

    const apiIds = apiPokemon.map((pok) => pok.id);

    const pokemonsIds = pokemons.map((pok) => pok.id);

    const duplicates = apiIds.filter((id) => pokemonsIds.includes(id));

    if (duplicates.length > 0) {
      totalPokemon = [...pokemons];
      totalPokemon.sort(sortPokemonByName(-1));
      dispatch(setPokemon(totalPokemon));
    } else {
      totalPokemon = [...pokemons, ...apiPokemon].sort(sortPokemonByName(-1));
      dispatch(setPokemon(totalPokemon));
    }
  };
  const handlerOriginal = () => {
    dispatch(setPokemon(pokemonsCopia));
  };

  const handlerSortDb = () => {
    const dbPokemon = [...apiPokemon].sort(sortPokemonByName(1));
    dispatch(setApiPokemon(dbPokemon));
  };
  const handlerSortZaDb = () => {
    const dbPokemon = [...apiPokemon].sort(sortPokemonByName(-1));
    dispatch(setApiPokemon(dbPokemon));
  };
  const handlerOriginalDb = () => {
    dispatch(setApiPokemon(apiPokemonCopia));
  };

  return {
    handlerSort,
    handlerOriginal,
    handlerSortZa,
    handlerSortTotal,
    handlerSortTotalZa,
    handlerSortDb,
    handlerSortZaDb,
    handlerOriginalDb,
  };
};
