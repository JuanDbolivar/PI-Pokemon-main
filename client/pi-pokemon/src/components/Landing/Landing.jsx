import { useEffect } from "react";
import "./Landing.css";
// import { useDispatch } from "react-redux";
// import { setPokemon } from "../../redux/counters/Pokemon/pokemonSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

function Landing() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const callTypes = async () => {
      try {
        await axios("http://localhost:3001/types");
      } catch (error) {
        console.log("error", error.message);
      }
    };
    callTypes();
  }, []);
  // useEffect(() => {
  //   const LandingToHome = async () => {
  //     try {
  //       const { data } = await axios("http://localhost:3001/poquemons/");
  //       if (data) {
  //         dispatch(setPokemon(data));
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   LandingToHome();
  // }, []);

  const buttonHandler = () => {
    navigate("/home");
  };

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
