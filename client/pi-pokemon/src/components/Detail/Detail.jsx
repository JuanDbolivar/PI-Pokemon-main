import "./Detail.css";
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

  let tipos = pokemonById.types;
  tipos = tipos.join(", ");

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h3>{pokemonById.id}</h3>
      <h1> {pokemonById.nombre}</h1>
      <img src={pokemonById.imagen} alt="" />
      <h2>Hp: {pokemonById.vida}</h2>
      <h2>Nivel de ataque: {pokemonById.ataque}</h2>
      <h2>Nivel de defensa: {pokemonById.defensa}</h2>
      <h2>Velocidad: {pokemonById.velocidad}</h2>
      <h2>Altura: {pokemonById.altura}</h2>
      <h2>Peso: {pokemonById.peso}</h2>
      <h2>Tipos: {tipos}</h2>
    </>
  );
}

export default Detail;
