import "./Cards.css";
//import { useSelector } from "react-redux"; //* con este useSelector yo leo el estado global y extrago lo que requiero
//* se puede llamar en el componente que lo necesite
import Card from "../Card/Card";

function Cards({ pokemon }) {
  // const { pokemons } = useSelector((state) => state.pokemon);

  return (
    <>
      <div className="cards">
        <img
          src="https://img.freepik.com/premium-photo/moon-clouds-wallpaper_802639-6388.jpg?w=740"
          alt="background"
          className="imgCards"
        />
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1cfff2-db8d-44cd-8a13-cb2a4162fae6/dd2zouo-047f7b3f-b895-43ac-82a4-abb6ca12c52a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWNmZmYyLWRiOGQtNDRjZC04YTEzLWNiMmE0MTYyZmFlNlwvZGQyem91by0wNDdmN2IzZi1iODk1LTQzYWMtODJhNC1hYmI2Y2ExMmM1MmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EFI6YQ0acRLpYHzupMAxV_N4KMcpNWT-_3RJ4TV-4eU"
          alt="nav-footer"
          className="imgNPF"
        />
        {pokemon.map((pok) => (
          <Card key={pok.id} pok={pok} />
        ))}
      </div>
    </>
  );
}

export default Cards;
