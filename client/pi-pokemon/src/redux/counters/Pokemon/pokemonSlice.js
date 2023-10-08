import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
