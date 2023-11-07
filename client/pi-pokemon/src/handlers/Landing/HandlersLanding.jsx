import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setPokemon,
  setPokemonCopia,
  setApiPokemon,
  // setApiPokemonCopia,
} from "../../redux/counters/Pokemon/pokemonSlice";

export const HandlersLanding = () => {
  const dispatch = useDispatch();
  const { pokemons, pokemonsCopia } = useSelector((state) => state.pokemon);

  const pokeDb = async () => {
    try {
      const { data } = await axios("http://localhost:3001/poquemons/db");
      if (data) {
        const newData = data.map((pok) => {
          pok.types = pok.Types.map((tipo) => tipo.nombre);
          delete pok.Types;
          return pok;
        });
        if (newData) {
          const apiIds = newData.map((pok) => pok.id); //map database
          const pokemonsIds = pokemonsCopia.map((pok) => pok.id); //map estado redux
          const duplicates = apiIds.filter((id) => !pokemonsIds.includes(id));
          if (duplicates.length > 0) {
            const poke = newData.filter((pok) => {
              return duplicates.some((dPok) => pok.id === dPok);
            });
            const allPok = [...poke, ...pokemonsCopia];
            const allPokCopia = [...poke, ...pokemonsCopia];
            dispatch(setPokemon(allPok));
            dispatch(setPokemonCopia(allPokCopia));
            dispatch(setApiPokemon(newData)); //pokemons de la base de datos
          } else {
            const allPokCopia = [...pokemonsCopia];
            dispatch(setPokemon(allPokCopia));
            dispatch(setPokemonCopia(allPokCopia));
            dispatch(setApiPokemon(newData)); //pokemons de la base de datos
          }
        }
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  return {
    pokeDb,
  };
};
