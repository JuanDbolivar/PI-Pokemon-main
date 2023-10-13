import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./counters/Pokemon/pokemonSlice";
import pokemonIdReducer from "./counters/PokemonId/pokemonIdSlice";
import pokemonNameReducer from "./counters/PokemonName/PokemonName";
import newPokemonReducer from "./counters/pokemonCreate/pokemonCreateSlice";
import typesReducer from "./counters/Type/typeSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pokemonsId: pokemonIdReducer,
    pokemoName: pokemonNameReducer,
    newPokemon: newPokemonReducer,
    types: typesReducer,
  },
});
