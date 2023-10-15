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

    const pokemonsIds = totalPokemon.map((pok) => pok.id);

    const duplicates = apiIds.filter((id) => pokemonsIds.includes(id));

    if (duplicates.length > 0) {
      totalPokemon = totalPokemon.filter((pok) => !duplicates.includes(pok.id));
      totalPokemon.sort(sortPokemonByName(1));
      dispatch(setPokemon(totalPokemon));
    } else {
      totalPokemon.sort(sortPokemonByName(1));
      dispatch(setPokemon(totalPokemon));
    }
  };
  
  const handlerSortTotalZa = () => {
    let totalPokemon = [...pokemons, ...apiPokemon];

    const apiIds = apiPokemon.map((pok) => pok.id);

    const pokemonsIds = totalPokemon.map((pok) => pok.id);

    const duplicates = apiIds.filter((id) => pokemonsIds.includes(id));

    if (duplicates.length > 0) {
      totalPokemon = totalPokemon.filter((pok) => !duplicates.includes(pok.id));
      totalPokemon.sort(sortPokemonByName(-1));
      dispatch(setPokemon(totalPokemon));
    } else {
      totalPokemon.sort(sortPokemonByName(-1));
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

// export const SortPokemons = () => {
//   const dispatch = useDispatch();
//   const { pokemons, pokemonsCopia, apiPokemon, apiPokemonCopia } = useSelector(
//     (state) => state.pokemon
//   );

//   const totalPokemon = [...pokemons, ...apiPokemon];
//   const totalPokemonZa = [...pokemons, ...apiPokemon];

//   const pokemon = [...pokemons];
//   const pokemonZa = [...pokemons];

//   const dbPokemon = [...apiPokemon];
//   const dbPokemonZa = [...apiPokemon];

//   /**  Pokemons de la A-Z*/
//   pokemon.sort((a, b) => {
//     if (a.nombre > b.nombre) return 1;
//     if (a.nombre < b.nombre) return -1;
//     return 0;
//   });
//   totalPokemon.sort((a, b) => {
//     if (a.nombre > b.nombre) return 1;
//     if (a.nombre < b.nombre) return -1;
//     return 0;
//   });
//   dbPokemon.sort((a, b) => {
//     if (a.nombre > b.nombre) return 1;
//     if (a.nombre < b.nombre) return -1;
//     return 0;
//   });

//   /**  Pokemons de la Z-A*/
//   pokemonZa.sort((a, b) => {
//     if (a.nombre > b.nombre) return -1;
//     if (a.nombre < b.nombre) return 1;
//     return 0;
//   });
//   totalPokemonZa.sort((a, b) => {
//     if (a.nombre > b.nombre) return -1;
//     if (a.nombre < b.nombre) return 1;
//     return 0;
//   });
//   dbPokemonZa.sort((a, b) => {
//     if (a.nombre > b.nombre) return -1;
//     if (a.nombre < b.nombre) return 1;
//     return 0;
//   });

//   const handlerSort = () => {
//     dispatch(setPokemon(pokemon));
//   };
//   const handlerSortZa = () => {
//     dispatch(setPokemon(pokemonZa));
//   };
//   const handlerSortTotal = () => {
//     dispatch(setPokemon(totalPokemon));
//   };
//   const handlerSortTotalZa = () => {
//     dispatch(setPokemon(totalPokemonZa));
//   };
//   const handlerOriginal = () => {
//     dispatch(setPokemon(pokemonsCopia));
//   };

//   const handlerSortDb = () => {
//     dispatch(setApiPokemon(dbPokemon));
//   };
//   const handlerSortZaDb = () => {
//     dispatch(setApiPokemon(dbPokemonZa));
//   };
//   const handlerOriginalDb = () => {
//     dispatch(setApiPokemon(apiPokemonCopia));
//   };

//   return {
//     handlerSort,
//     handlerOriginal,
//     handlerSortZa,
//     handlerSortTotal,
//     handlerSortTotalZa,
//     handlerSortDb,
//     handlerSortZaDb,
//     handlerOriginalDb,
//   };
// };
