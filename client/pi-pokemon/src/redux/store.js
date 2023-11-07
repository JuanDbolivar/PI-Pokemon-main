import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
// import pokemonReducer from "./counters/Pokemon/pokemonSlice";
// import pokemonIdReducer from "./counters/PokemonId/pokemonIdSlice";
// import pokemonNameReducer from "./counters/PokemonName/PokemonName";
// import newPokemonReducer from "./counters/pokemonCreate/pokemonCreateSlice";
// import typesReducer from "./counters/Type/typeSlice";

const persistConfig = {
  key: "key",
  storage,
  manualOnly: true,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   pokemon: pokemonReducer,
  //   pokemonsId: pokemonIdReducer,
  //   pokemoName: pokemonNameReducer,
  //   newPokemon: newPokemonReducer,
  //   types: typesReducer,
  // },
});

export const persistor = persistStore(store);
