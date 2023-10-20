import "./Detail.css";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPokemonsId } from "../../redux/counters/PokemonId/pokemonIdSlice";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { pokemonById } = useSelector((state) => state.pokemonsId);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const pokById = async () => {
      try {
        const { data } = await axios(`http://localhost:3001/poquemons/${id}`);
        if (data) {
          dispatch(setPokemonsId(data[0]));
          setLoading(false);
        }
      } catch (error) {}
    };
    pokById();
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1cfff2-db8d-44cd-8a13-cb2a4162fae6/dd2zouo-047f7b3f-b895-43ac-82a4-abb6ca12c52a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWNmZmYyLWRiOGQtNDRjZC04YTEzLWNiMmE0MTYyZmFlNlwvZGQyem91by0wNDdmN2IzZi1iODk1LTQzYWMtODJhNC1hYmI2Y2ExMmM1MmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EFI6YQ0acRLpYHzupMAxV_N4KMcpNWT-_3RJ4TV-4eU"
        alt="nav-footer"
        className="imgN"
      />

      <img
        src="https://pbs.twimg.com/ext_tw_video_thumb/1429510996243226629/pu/img/GZ4m7WqHX4E-toyx.jpg:large"
        alt="background"
        className="backgroundImg"
      />
      <img src={pokemonById.imagen} alt="" className="poke"/>
      <div className="descripcion">
        <h3>{pokemonById.id}</h3>
        <h1> {pokemonById.nombre}</h1>
        <h2>Hp: {pokemonById.vida}</h2>
        <h2>Nivel de ataque: {pokemonById.ataque}</h2>
        <h2>Nivel de defensa: {pokemonById.defensa}</h2>
        <h2>Velocidad: {pokemonById.velocidad}</h2>
        <h2>Altura: {pokemonById.altura}</h2>
        <h2>Peso: {pokemonById.peso}</h2>
        <h2>Tipos: {pokemonById.types.join(", ")}</h2>
      </div>
    </>
  );
}

export default Detail;
