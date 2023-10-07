import "./Card.css";

function Card({ pok }) {
  const { id, nombre, vida, ataque, imagen } = pok;
  return (
    <>
    <hr />
      <div>
        <h2>{nombre}</h2>
        <h2>{vida}</h2>
        <h2>{ataque}</h2>
        <img src={imagen} alt="pokemon image" />
      </div>
      <hr />
    </>
  );
}

export default Card;
