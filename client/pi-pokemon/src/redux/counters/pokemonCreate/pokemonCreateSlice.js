import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: "",
  imagen: "",
  vida: 0,
  ataque: 0,
  defensa: 0,
  velocidad: 0,
  altura: 0,
  peso: 0,
  types: [],
};

export const newPokemonSlice = createSlice({
  name: "newPokemon",
  initialState,
  reducers: {
    setNewPokwmon: (state, action) => {
      state.nombre = action.payload.nombre;
    },
    setPokImagen: (state, action) => {
      state.imagen = action.payload.imagen;
    },
    setPokVida: (state, action) => {
      state.vida = action.payload.vida;
    },
    setPokAtaque: (state, action) => {
      state.ataque = action.payload.ataque;
    },
    setPokDefensa: (state, action) => {
      state.defensa = action.payload.defensa;
    },
    setPokVelocidad: (state, action) => {
      state.velocidad = action.payload.velocidad;
    },
    setPokAltura: (state, action) => {
      state.altura = action.payload.altura;
    },
    setPokPeso: (state, action) => {
      state.peso = action.payload.peso;
    },
    setPokTypes: (state, action) => {
      state.types = [...state.types, action.payload.types];
    },
    unSetPok: (state) => {
      state.nombre = "";
      state.imagen = "";
      state.vida = 0;
      state.ataque = 0;
      state.defensa = 0;
      state.velocidad = 0;
      state.altura = 0;
      state.peso = 0;
      state.types = [];
    },
  },
});

export const {
  setNewPokwmon,
  setPokImagen,
  setPokVida,
  setPokAtaque,
  setPokDefensa,
  setPokVelocidad,
  setPokAltura,
  setPokPeso,
  setPokTypes,
  unSetPok,
} = newPokemonSlice.actions;

export default newPokemonSlice.reducer;
