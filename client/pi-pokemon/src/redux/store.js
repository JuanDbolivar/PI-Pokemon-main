import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./counters/Pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
