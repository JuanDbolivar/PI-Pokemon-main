import "./Landing.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPokemon } from "../../redux/counters/Pokemon/pokemonSlice";
import { setTypes } from "../../redux/counters/Type/typeSlice";

function Landing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pokemons}=useSelector((state) => state.pokemon)
  
  const buttonHandler = async () => {
    try {
      const { data } = await axios("http://localhost:3001/types/db");
      if (data) {
        dispatch(setTypes(data));
      }
    } catch (error) {
      console.log(error.message);
    }
    navigate("/home");
  };

  useEffect(() => {
    const callTypes = async () => {
      try {
        await axios("http://localhost:3001/types");
      } catch (error) {
        console.error("error", error.message);
      }
    };
    callTypes();
  }, []);

  useEffect(() => {
    if (pokemons.length === 0) {
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



  return (
    <>
      <div className="container">
        <img src="https://i.gifer.com/CxOP.gif" />

        <button onClick={buttonHandler} className="button">
          Empecemos
        </button>
      </div>
    </>
  );
}

export default Landing;
