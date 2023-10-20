import "./Form.css";
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
            <img
          src="https://img.freepik.com/premium-photo/moon-clouds-wallpaper_802639-6388.jpg?w=740"
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
          onChange={handleChange}
        />
<br />
        <label htmlFor="imagen">Imagen del pokemon: </label>
        <input
          type="text"
          name="imagen"
          required
          value={imagen}
          onChange={handleIChange}
        />
<br />
        <label htmlFor="vida"> Nivel de vida: </label>
        <input
          type="number"
          name="vida"
          required
          value={vida}
          onChange={handleVChange}
        />
<br />
        <label htmlFor="ataque">Nivel de ataque: </label>
        <input
          type="number"
          name="ataque"
          required
          value={ataque}
          onChange={handleAChange}
        />
<br />
        <label htmlFor="defensa">Nivel de defensa: </label>
        <input
          type="number"
          name="defensa"
          required
          value={defensa}
          onChange={handleDChange}
        />
<br />
        <label htmlFor="velocidad">Velocidad: </label>
        <input
          type="number"
          name="velocidad"
          value={velocidad}
          onChange={handleVelChange}
        />
<br />
        <label htmlFor="altura">Altura: </label>
        <input
          type="number"
          name="altura"
          value={altura}
          onChange={handleAlChange}
        />
<br />
        <label htmlFor="peso">Peso: </label>
        <input
          type="number"
          name="peso"
          value={peso}
          onChange={handlePChange}
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
              onChange={handleTChange}
             className="selectForm">
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
<br />
        <button>Agregar pokemon</button>
      </form>
    </>
  );
}

export default Form;
