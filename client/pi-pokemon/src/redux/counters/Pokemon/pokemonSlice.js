import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  pokemonsCopia: [],
  pokemonsFiltered: [],
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
    setPokemonsFiltered: (state, action) => {
      state.pokemonsFiltered = action.payload;
    },
    setApiPokemon: (state, action) => {
      state.apiPokemon = action.payload;
    },
    setApiPokemonCopia: (state, action) => {
      state.apiPokemonCopia = action.payload;
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
  setPokemonCopia,
  setApiPokemonCopia,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
