import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonByName: {},
};

export const pokemonNameSlice = createSlice({
  name: "pokemoName",
  initialState,
  reducers: {
    setPokemonName: (state, action) => {
      state.pokemonByName = action.payload;
    },
  },
});

export const { setPokemonName } = pokemonNameSlice.actions;
export default pokemonNameSlice.reducer;
