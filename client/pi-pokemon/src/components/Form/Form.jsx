import "./Form";
// import Loading from "../Loading/Loading";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { HandlerForm } from "../../handlers/HandlerForm";

function Form() {
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
          // required
          value={defensa}
          onChange={handleDChange}
        />

        <label htmlFor="velocidad">Velocidad: </label>
        <input
          type="number"
          name="velocidad"
          // required
          value={velocidad}
          onChange={handleVelChange}
        />

        <label htmlFor="altura">Altura: </label>
        <input
          type="number"
          name="altura"
          // required
          value={altura}
          onChange={handleAlChange}
        />

        <label htmlFor="peso">Peso: </label>
        <input
          type="number"
          name="peso"
          // required
          value={peso}
          onChange={handlePChange}
        />

        <label htmlFor="types">Tipos</label>
        <input
          type="text"
          name="types"
          // required
          value={types}
          onChange={handleTChange}
        />

        <button>Agregar pokemon</button>
      </form>
    </>
  );
}

export default Form;
