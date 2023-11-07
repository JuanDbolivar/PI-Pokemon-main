import "./Landing.css";
import axios from "axios";
import pokeClose from "../../pokeballimagens/pokeballClose.png";
import pokeOpen from "../../pokeballimagens/pokeballOpen.png";
import { HandlersLanding } from "../../handlers/Landing/HandlersLanding";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setPokemon,
  setPokemonCopia,
} from "../../redux/counters/Pokemon/pokemonSlice";
import { setTypes } from "../../redux/counters/Type/typeSlice";

function Landing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { apiPokemon, pokemons } = useSelector((state) => state.pokemon);
  const { tipos } = useSelector((state) => state.types);

  const { pokeDb } = HandlersLanding();

  const buttonHandler = async () => {
    try {
      const { data } = await axios("http://localhost:3001/types/db");
      if (data) {
        dispatch(setTypes(data));
      }
      pokeDb();
    } catch (error) {
      console.error(error.message);
    }
    navigate("/home");
  };

  useEffect(() => {
    if (tipos.length === 0) {
      const callTypes = async () => {
        try {
          const { data } = await axios("http://localhost:3001/types");
          console.log("data", data);
          if (data) {
            const { data } = await axios("http://localhost:3001/types/db");
            if (data) {
              dispatch(setTypes(data));
            }
          }
        } catch (error) {
          console.error("error", error.message);
        }
      };
      callTypes();
    }
  }, []);

  useEffect(() => {
    // if (pokemons.length === 0) {
      const LandingToHome = async () => {
        try {
          const { data } = await axios("http://localhost:3001/poquemons/");
          if (data) {
            const allPok = [...apiPokemon, ...data];

            dispatch(setPokemon(allPok));
            dispatch(setPokemonCopia(allPok));
          }
        } catch (error) {
          console.error(error.message);
        }
      };
      LandingToHome();
    // }
  }, []);

  return (
    <>
      <div className="container">
        <img src="https://i.gifer.com/CxOP.gif" alt="background" />

        <button onClick={buttonHandler} className="buton">
          <div className="imageCont">
            <img src={pokeOpen} alt="button " />
            <img src={pokeClose} alt="button " className="pokeOpen" />
          </div>
        </button>
      </div>
    </>
  );
}

export default Landing;
