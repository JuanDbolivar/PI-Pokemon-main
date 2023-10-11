import "./Home.css";
import Cards from "../Cards/Cards";
import Loading from "../Loading/Loading";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokemon } from "../../redux/counters/Pokemon/pokemonSlice";
// import {  } from "react-redux";

function Home() {
  const [isOk, setIsOk] = useState(false);
  const { pokemons } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => { // sirve para llamar a los pokemones otra vez, cada que se recargue la pagina
    if (!pokemons.lenght) {
      const LandingToHome = async () => {
        try {
          const { data } = await axios("http://localhost:3001/poquemons/");
          if (data) {
            dispatch(setPokemon(data));
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      LandingToHome();
    }
  }, []);

  useEffect(() => {
    if (pokemons.length) {
      setIsOk(true);
    }
  }, [pokemons]);

  return (
    <>
      <hr />
      <h1> Home</h1>
      {isOk ? <Cards /> : <Loading />}
    </>
  );
}

export default Home;
