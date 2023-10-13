import { useSelector } from "react-redux";
import Card from "../Card/Card";

function ApiPokemon() {
  const { apiPokemon } = useSelector((state) => state.pokemon);

  return (
    <>
      <div>
        {apiPokemon.map((pok) => (
          <Card key={pok.id} pok={pok} />
        ))}
      </div>
    </>
  );
}

export default ApiPokemon;
