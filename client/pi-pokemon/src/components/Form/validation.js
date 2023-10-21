const validation = ({
  nombre,
  imagen,
  vida,
  ataque,
  defensa,
  velocidad,
  altura,
  peso,
  types
}) => {
  // /^[a-z0-9_-]{3,16}$/
  // (http|ftp|https):\/\/([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,\b.png\b]*)?
  const regexName = /^[A-Za-z0-9 ]{3,20}$/;
  //   const regexImagen = /^([A-Za-z0-9]){6,10}$/;
  let errors = {};

  if (!regexName.test(nombre)) {
    errors.nombre = "El nombre no debe tener caracteres especiales";
  }
  if (!nombre) {
    errors.nombre = "Esta campo no puede estar vacio";
  }
  if ((nombre.length < 3 && nombre.length > 1) || nombre.length > 20) {
    errors.nombre = "Debe tener entre 3 y 20 caracteres";
  }

  //   if (!regexPassword.test(password)) {
  //     errors.password =
  //       "Password debe tener al menos un numero, una letre mayuscula y debe tener entre 6 y 10 caracteres";
  //   }

  return errors;
};

export default validation;
