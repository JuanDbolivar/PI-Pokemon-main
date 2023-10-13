import Card from "../Card/Card";
import { useSelector } from "react-redux";

function PokemonFiltered() {
  const { pokemonsFiltered } = useSelector((state) => state.pokemon);

  return (
    <>
      {pokemonsFiltered.map((pok) => (
        <Card key={pok.id} pok={pok} />
      ))}
    </>
  );
}

export default PokemonFiltered;
