import { combineReducers } from "redux";
import pokemonReducer from "./counters/Pokemon/pokemonSlice";
import pokemonIdReducer from "./counters/PokemonId/pokemonIdSlice";
import pokemonNameReducer from "./counters/PokemonName/PokemonName";
import newPokemonReducer from "./counters/pokemonCreate/pokemonCreateSlice";
import typesReducer from "./counters/Type/typeSlice";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonsId: pokemonIdReducer,
  pokemoName: pokemonNameReducer,
  newPokemon: newPokemonReducer,
  types: typesReducer,
});

export default rootReducer;
