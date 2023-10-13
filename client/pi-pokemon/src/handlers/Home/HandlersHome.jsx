import { useSelector, useDispatch } from "react-redux";
import {
  setPokemonsFiltered,
  unSetPokemonsFiltered,
} from "../../redux/counters/Pokemon/pokemonSlice";
import { useState } from "react";

export function HandlersHome() {
  const dispatch = useDispatch();
  const [typesFilter, setTypesFilter] = useState("");
  const { pokemons, apiPokemon } = useSelector((state) => state.pokemon);
  const pok = [...pokemons, ...apiPokemon];

  const handlerFilter = (e) => {
    const value = e.target.value;
    setTypesFilter(value);
  };

  const buttonrFilter = () => {
    const filteredPokemons = pok.filter((pokemon) =>
      pokemon.types.includes(typesFilter)
    );
    dispatch(setPokemonsFiltered(filteredPokemons));
  };

  const handlerBorrar = () => {
    dispatch(unSetPokemonsFiltered());
  };

  return { handlerFilter, buttonrFilter, handlerBorrar };
}
