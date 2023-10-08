import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./counters/Pokemon/pokemonSlice";
import pokemonIdReducer from "./counters/PokemonId/pokemonIdSlice";
import pokemonNameReducer from "./counters/PokemonName/PokemonName";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pokemonsId: pokemonIdReducer,
    pokemoName: pokemonNameReducer,
  },
});
