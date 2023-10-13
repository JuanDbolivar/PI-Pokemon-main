import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { setPokemonName } from "../../redux/counters/PokemonName/PokemonName";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const onSearch = async (name) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/poquemons/?name=${name}`
      );
      if (data[0] !== null) {
        dispatch(setPokemonName(data[0]));
        navigate(`/PokByName/${name}`);
      } else {
        window.alert("personaje no existe");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <label htmlFor="pokemon">buscar</label>
      <input
        type="text"
        name="pokemon"
        required
        onChange={handleChange}
        value={name}
      />
      {name ? (
        <button
          onClick={() => {
            onSearch(name);
          }}
        >
          Buscar🔍
        </button>
      ) : null}
    </>
  );
}

export default SearchBar;
