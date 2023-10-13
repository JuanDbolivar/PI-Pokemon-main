import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tipos: [],
};

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.tipos = action.payload;
    },
  },
});

export const { setTypes } = typesSlice.actions;
export default typesSlice.reducer;
