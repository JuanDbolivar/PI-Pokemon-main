import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonById: {},
};

export const pokemonIdSlice = createSlice({
  name: "pokemonsId",
  initialState,
  reducers: {
    setPokemonsId: (state, action) => {
      state.pokemonById = action.payload;
    },
  },
});

export const { setPokemonsId } = pokemonIdSlice.actions;
export default pokemonIdSlice.reducer;
