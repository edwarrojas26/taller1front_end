let nombre = document.querySelector(".seleccion1");
let apellido = document.querySelector(".seleccion2");
let orientacion = document.querySelector(".seleccion3");
let boton = document.querySelector(".consultar");

function consultar() {
  if (
    (nombre.value == "Tatiana" && apellido.value == "Cabrera" && orientacion.value == "M") || orientacion.value == "JS"
  ) {
    alert(`La respuesta es correcta`);
  } else if ( nombre.value == "Cristian" && apellido.value == "Buitrago" && orientacion.value == "PHP") {
    alert(`La respuesta es correcta`)
  } else if ( nombre.value == "Jose" && apellido.value == "Galindo" && orientacion.value == "BD") {
    alert(`La respuesta es correcta`)
  }  else if ( nombre.value == "Luis" && apellido.value == "Baquero" && orientacion.value == "CF") {
    alert(`La respuesta es correcta`)
  } else if ( nombre.value == "Carolina" && apellido.value == "Forero" && orientacion.value == "P") {
    alert(`La respuesta es correcta`)
  } else if ( nombre.value == "Yaneth" && apellido.value == "Castillo" && orientacion.value == "GA") {
    alert(`La respuesta es correcta`)
  } else if ( nombre.value == "Adriana" && apellido.value == "Duarte" && orientacion.value == "DFE") {
    alert(`La respuesta es correcta`)
  } else {
      alert(`La respuesta es incorrecta`);
  }
}
boton.addEventListener(`click`, consultar);
