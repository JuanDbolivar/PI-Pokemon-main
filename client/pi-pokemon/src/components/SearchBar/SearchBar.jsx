import "./SearchBar.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPokemonName } from "../../redux/counters/PokemonName/PokemonName";

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
      console.error(error.message);
    }
  };

  return (
    <>
      <label htmlFor="pokemon" className="searchLabel">buscar</label>
      <input
        type="text"
        name="pokemon"
        required
        onChange={handleChange}
        value={name}
        className="searchInput"
      />
      {name ? (
        <button
          onClick={() => {
            onSearch(name);
          }}
        className="searchButton">
          🔍
        </button>
      ) : null}
    </>
  );
}

export default SearchBar;
