import "./Cards.css";
import { useSelector } from "react-redux"; //* con este useSelector yo leo el estado global y extrago lo que requiero
//* se puede llamar en el componente que lo necesite
import Card from "../Card/Card";

function Cards() {
  const { pokemons } = useSelector((state) => state.pokemon);

  return (
    <>
      <div>
        {pokemons.map((pok) => (
          <Card key={pok.id} pok={pok} />
        ))}
      </div>
    </>
  );
}

export default Cards;
