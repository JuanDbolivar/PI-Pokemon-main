import "./Form";
// onSubmit="{handleSubmit}"
function Form() {
  return (
    <>
      <form>
        <label htmlFor="">Nombre del pokemon: </label>
        <input type="text" />

        <label htmlFor="">Imagen del pokemon: </label>
        <input type="text" />

        <label htmlFor=""> Nivel de vida: </label>
        <input type="text" />

        <label htmlFor="">Nivel de ataque: </label>
        <input type="text" />

        <label htmlFor="">Nivel de defensa: </label>
        <input type="text" />

        <label htmlFor="">Velocidad: </label>
        <input type="text" />

        <label htmlFor="">Altura: </label>
        <input type="text" />

        <label htmlFor="">Peso: </label>
        <input type="text" />

        <label htmlFor="">Tipos</label>
        <input type="text" />

        <button>Agregar pokemon</button>
      </form>
    </>
  );
}

export default Form;
