const validation = ({
  nombre,
  imagen,
  vida,
  ataque,
  defensa,
  types,
}) => {
  const regexName = /^[A-Za-z0-9 ]{3,20}$/;
  const regexImagen = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

  let errors = {};

  if (!regexName.test(nombre)) {
    errors.nombre = "El nombre no debe tener caracteres especiales";
  }
  if (!nombre) {
    errors.nombre = "Este campo no puede estar vacio";
  }
  if ((nombre.length < 3 && nombre.length > 1) || nombre.length > 20) {
    errors.nombre = "Debe tener entre 3 y 20 caracteres";
  }

  if (!regexImagen.test(imagen)) {
    errors.imagen = "Debe ser una URL valida";
  }
  if (!imagen) {
    errors.imagen = "Este campo no puede estar vacio";
  }

  if (types.length === 0) {
    errors.types = "Este campo no puede estar vacio";
  }

  if (vida <= 0 || !vida) {
    errors.vida = "Este campo no puede tener numeros negativos y debe ser mayor a 0";
  }
  if (ataque <= 0 || !ataque) {
    errors.ataque = "Este campo no puede tener numeros negativos y debe ser mayor a 0";
  }
  if (defensa <= 0 || !defensa) {
    errors.defensa = "Este campo no puede tener numeros negativos y debe ser mayor a 0";
  }

  return errors;
};

export default validation;
