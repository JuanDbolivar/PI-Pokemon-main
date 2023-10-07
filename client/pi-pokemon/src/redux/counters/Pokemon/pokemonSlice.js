import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [
    {
      id: 1,
      nombre: "bulbasaur",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      vida: 45,
      ataque: 49,
      defensa: 49,
      velocidad: 45,
      altura: 7,
      peso: 69,
      types: ["grass", "poison"],
    },
    {
      id: 2,
      nombre: "ivysaur",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      vida: 60,
      ataque: 62,
      defensa: 63,
      velocidad: 60,
      altura: 10,
      peso: 130,
      types: ["grass", "poison"],
    },
    {
      id: 3,
      nombre: "venusaur",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      vida: 80,
      ataque: 82,
      defensa: 83,
      velocidad: 80,
      altura: 20,
      peso: 1000,
      types: ["grass", "poison"],
    },
    {
      id: 4,
      nombre: "charmander",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      vida: 39,
      ataque: 52,
      defensa: 43,
      velocidad: 65,
      altura: 6,
      peso: 85,
      types: ["fire"],
    },
    {
      id: 5,
      nombre: "charmeleon",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      vida: 58,
      ataque: 64,
      defensa: 58,
      velocidad: 80,
      altura: 11,
      peso: 190,
      types: ["fire"],
    },
  ],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemons = [...state.pokemons, action.payload];
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
