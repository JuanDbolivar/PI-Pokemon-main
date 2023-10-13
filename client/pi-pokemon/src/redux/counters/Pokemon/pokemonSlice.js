import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  pokemonsFiltered: [],
  apiPokemon: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemons = [...state.pokemons, ...action.payload];
    },
    setPokemonsFiltered: (state, action) => {
      state.pokemonsFiltered = action.payload;
    },
    setApiPokemon: (state, action) => {
      state.apiPokemon = action.payload;
    },
    unSetPokemonsFiltered: (state) => {
      state.pokemonsFiltered = [];
    },
  },
});

export const {
  setPokemon,
  setPokemonsFiltered,
  setApiPokemon,
  unSetPokemonsFiltered,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
