import "./Form.css";
import validation from "./validation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HandlerForm } from "../../handlers/HandlerForm";
import { unSetPok } from "../../redux/counters/pokemonCreate/pokemonCreateSlice";

function Form() {
  const dispatch = useDispatch();

  const { tipos } = useSelector((state) => state.types);

  const {
    nombre,
    imagen,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    types,
  } = useSelector((state) => state.newPokemon);

  const pokLec = {
    nombre,
    imagen,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    types,
  };

  const {
    handleChange,
    handleIChange,
    handleVChange,
    handleAChange,
    handleDChange,
    handleVelChange,
    handleAlChange,
    handlePChange,
    handleTChange,
    handleSubmit,
  } = HandlerForm();

  useEffect(() => {
    dispatch(unSetPok());
  }, []);

  const [errors, setErrors] = useState({
    nombre: "",
    imagen: "",
    vida: 0,
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    types: "",
  });

  const handleError = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setErrors(validation({ ...pokLec, [property]: value }));
  };
  return (
    <>
      <img
        src="https://w0.peakpx.com/wallpaper/397/77/HD-wallpaper-pokeballs-games-gaming-great-ball-master-ball-nintendo-poke-ball-pokeball-pokemon-ultra-ball.jpg"
        alt="background"
        className="imgBack"
      />

      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1cfff2-db8d-44cd-8a13-cb2a4162fae6/dd2zouo-047f7b3f-b895-43ac-82a4-abb6ca12c52a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWNmZmYyLWRiOGQtNDRjZC04YTEzLWNiMmE0MTYyZmFlNlwvZGQyem91by0wNDdmN2IzZi1iODk1LTQzYWMtODJhNC1hYmI2Y2ExMmM1MmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EFI6YQ0acRLpYHzupMAxV_N4KMcpNWT-_3RJ4TV-4eU"
        alt="nav-footer"
        className="imgForm"
      />

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del pokemon: </label>
        <input
          type="text"
          name="nombre"
          required
          value={nombre}
          onChange={(event) => {
            handleChange(event);
            handleError(event);
          }}
        />
        {errors.nombre ? <p className="error">{errors.nombre}</p> : null}

        <br />
        <label htmlFor="imagen">Imagen del pokemon: </label>
        <input
          type="text"
          name="imagen"
          required
          value={imagen}
          onChange={(event) => {
            handleIChange(event);
            handleError(event);
          }}
        />
        {errors.imagen ? <p className="error">{errors.imagen}</p> : null}

        <br />
        <label htmlFor="vida"> Nivel de vida: </label>
        <input
          type="number"
          name="vida"
          required
          value={vida}
          onChange={(event) => {
            handleVChange(event);
            handleError(event);
          }}
          min={0}
        />
        {errors.vida ? <p className="error">{errors.vida}</p> : null}

        <br />
        <label htmlFor="ataque">Nivel de ataque: </label>
        <input
          type="number"
          name="ataque"
          required
          value={ataque}
          onChange={(event) => {
            handleAChange(event);
            handleError(event);
          }}
          min={0}
        />
        {errors.ataque ? <p className="error">{errors.ataque}</p> : null}

        <br />
        <label htmlFor="defensa">Nivel de defensa: </label>
        <input
          type="number"
          name="defensa"
          required
          value={defensa}
          onChange={(event) => {
            handleDChange(event);
            handleError(event);
          }}
          min={0}
        />
        {errors.defensa ? <p className="error">{errors.defensa}</p> : null}

        <br />
        <label htmlFor="velocidad">Velocidad: </label>
        <input
          type="number"
          name="velocidad"
          value={velocidad}
          onChange={handleVelChange}
          min={0}
        />
        <br />
        <label htmlFor="altura">Altura: </label>
        <input
          type="number"
          name="altura"
          value={altura}
          onChange={handleAlChange}
          min={0}
        />
        <br />
        <label htmlFor="peso">Peso: </label>
        <input
          type="number"
          name="peso"
          value={peso}
          onChange={handlePChange}
          min={0}
        />
        <br />
        <label htmlFor="types">
          Tipos:
          {tipos.length !== 0 && (
            <select
              multiple={true}
              id="types"
              name="types"
              // value={types}
              onChange={(event) => {
                handleTChange(event);
                handleError(event);
              }}
              className="selectForm"
            >
              <optgroup label="tipos">
                {tipos.map((t) => (
                  <option key={t.id} value={t.nombre}>
                    {t.nombre}
                  </option>
                ))}
              </optgroup>
            </select>
          )}
        </label>
        <input
          type="text"
          name="types"
          value={types}
          className="typesInput"
          readOnly
        />
        {errors.types ? <p className="error">{errors.types}</p> : null}

        <br />
        <button
          disabled={
            errors.types ||
            errors.nombre ||
            errors.imagen ||
            errors.vida ||
            errors.ataque ||
            errors.defensa
              ? true
              : false
          }
        >
          Agregar pokemon
        </button>
      </form>
    </>
  );
}

export default Form;
