import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  pokemonsCopia: [],
  apiPokemon: [],
  apiPokemonCopia: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemons = action.payload;
    },
    setPokemonCopia: (state, action) => {
      state.pokemonsCopia = action.payload;
    },
    setApiPokemon: (state, action) => {
      state.apiPokemon = action.payload;
    },
    setApiPokemonCopia: (state, action) => {
      state.apiPokemonCopia = action.payload;
    },
  },
});

export const {
  setPokemon,
  setApiPokemon,
  setPokemonCopia,
  setApiPokemonCopia,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
