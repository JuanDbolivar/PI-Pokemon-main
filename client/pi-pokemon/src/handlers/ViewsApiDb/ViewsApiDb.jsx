import {
  setPokemon,
} from "../../redux/counters/Pokemon/pokemonSlice";
import { useSelector, useDispatch } from "react-redux";

export const ViewsApiDb = () => {
  const dispatch = useDispatch();

  const { pokemons, pokemonsCopia, apiPokemon } = useSelector(
    (state) => state.pokemon
  );
  const handlerDb = () => {
    const pokDb = [...apiPokemon];
    dispatch(setPokemon(pokDb));
  };
  const handlerApi = () => {
    const apiIds = apiPokemon.map((pok) => pok.id); //map database
    const pokemonsApi = pokemonsCopia.filter((pok) => !apiIds.includes(pok.id));
    dispatch(setPokemon(pokemonsApi));
  };
  const handlerAll = () => {
    dispatch(setPokemon(pokemonsCopia));
  };
  return {
    handlerAll,
    handlerApi,
    handlerDb,
  };
};
