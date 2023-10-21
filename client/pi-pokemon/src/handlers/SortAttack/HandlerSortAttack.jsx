import { useSelector, useDispatch } from "react-redux";
import {
  setPokemon,
  setApiPokemon,
} from "../../redux/counters/Pokemon/pokemonSlice";

export const HandlerSortAttack = () => {
  const dispatch = useDispatch();
  const { pokemons, apiPokemon ,pokemonsCopia} = useSelector((state) => state.pokemon);

  const sortPokemonByName = (order) => {
    return (a, b) => {
      const ataqueA = a.ataque;
      const ataqueB = b.ataque;
      return order * (ataqueB - ataqueA);
    };
  };

  const handlerSortAttack = () => {
    const sortedPokemon = [...pokemons].sort(sortPokemonByName(1));
    dispatch(setPokemon(sortedPokemon));
  };
  const handlerSortMinAttack = () => {
    const pokemon = [...pokemons].sort(sortPokemonByName(-1));
    dispatch(setPokemon(pokemon));
  };

  const handlerSortTotalAttack = () => {
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

  const handlerSortTotalMinAttack = () => {
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

  const handlerSortDbAttack = () => {
    const dbPokemon = [...apiPokemon].sort(sortPokemonByName(1));
    dispatch(setApiPokemon(dbPokemon));
  };
  const handlerSortDbMinAttack = () => {
    const dbPokemon = [...apiPokemon].sort(sortPokemonByName(-1));
    dispatch(setApiPokemon(dbPokemon));
  };

  return {
    handlerSortAttack,
    handlerSortMinAttack,
    handlerSortTotalAttack,
    handlerSortTotalMinAttack,
    handlerSortDbAttack,
    handlerSortDbMinAttack,
  };
};
