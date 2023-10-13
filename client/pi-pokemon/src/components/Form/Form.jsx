import "./Form";
import { useSelector, useDispatch } from "react-redux";
import { unSetPok } from "../../redux/counters/pokemonCreate/pokemonCreateSlice";
import { HandlerForm } from "../../handlers/HandlerForm";
import { useEffect } from "react";

function Form() {
  const dispatch = useDispatch();
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

  const { tipos } = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(unSetPok());
  }, []);

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del pokemon: </label>
        <input
          type="text"
          name="nombre"
          required
          value={nombre}
          onChange={handleChange}
        />

        <label htmlFor="imagen">Imagen del pokemon: </label>
        <input
          type="text"
          name="imagen"
          required
          value={imagen}
          onChange={handleIChange}
        />

        <label htmlFor="vida"> Nivel de vida: </label>
        <input
          type="number"
          name="vida"
          required
          value={vida}
          onChange={handleVChange}
        />

        <label htmlFor="ataque">Nivel de ataque: </label>
        <input
          type="number"
          name="ataque"
          required
          value={ataque}
          onChange={handleAChange}
        />

        <label htmlFor="defensa">Nivel de defensa: </label>
        <input
          type="number"
          name="defensa"
          required
          value={defensa}
          onChange={handleDChange}
        />

        <label htmlFor="velocidad">Velocidad: </label>
        <input
          type="number"
          name="velocidad"
          value={velocidad}
          onChange={handleVelChange}
        />

        <label htmlFor="altura">Altura: </label>
        <input
          type="number"
          name="altura"
          value={altura}
          onChange={handleAlChange}
        />

        <label htmlFor="peso">Peso: </label>
        <input
          type="number"
          name="peso"
          value={peso}
          onChange={handlePChange}
        />

        <label htmlFor="types">
          Tipos:
          {tipos.length !== 0 && (
            <select
              multiple={true}
              id="types"
              name="types"
              // value={types}
              onChange={handleTChange}
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

        <button>Agregar pokemon</button>
      </form>
    </>
  );
}

export default Form;
