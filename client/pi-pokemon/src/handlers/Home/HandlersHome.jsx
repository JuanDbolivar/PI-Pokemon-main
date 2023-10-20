import { useSelector, useDispatch } from "react-redux";
import {
  setPokemon,
} from "../../redux/counters/Pokemon/pokemonSlice";
import { useState } from "react";

export function HandlersHome() {
  const dispatch = useDispatch();
  const {  apiPokemon, pokemonsCopia } = useSelector(
    (state) => state.pokemon
  );
  const [typesFilter, setTypesFilter] = useState("");
  const pok = [...pokemonsCopia, ...apiPokemon];

  const handlerFilter = (e) => {
    const value = e.target.value;
    setTypesFilter(value);
  };

  const buttonrFilter = () => {
    const filteredPokemons = pok.filter((pokemon) =>
      pokemon.types.includes(typesFilter)
    );
    dispatch(setPokemon(filteredPokemons));
  };

  const handlerBorrar = () => {
    dispatch(setPokemon(pokemonsCopia));
  };

  return { handlerFilter, buttonrFilter, handlerBorrar };
}
