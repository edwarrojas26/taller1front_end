/*Cantidad de caracteres-----------------------------------------------------------------*/
let palabra = document.querySelector(".palabra");

let boton = document.querySelector(".LP");

function mostrarLongitud() {
  let caracteres = palabra.value.length;

  alert(`El nombre ${palabra.value} tiene ${caracteres} caracteres`);
}

boton.addEventListener("click", mostrarLongitud);

/*A mayúsculas---------------------------------------------------------------------------*/

let botonMayus = document.querySelector(".Mayus");

function aMayusculas() {
  let mayusculas = palabra.value.toUpperCase();
  alert(`${mayusculas}`);
}
botonMayus.addEventListener(`click`, aMayusculas);

/*A minúsculas---------------------------------------------------------------------------*/

let botonMinus = document.querySelector(".Minus");

function aMinusculas() {
  let minusculas = palabra.value.toLowerCase();
  alert(`Se ha convertido la palabra ${palabra.value} a ${minusculas}`);
}
botonMinus.addEventListener(`click`, aMinusculas);

/*Primer caracter------------------------------------------------------------------------*/

let botonPC = document.querySelector(".PC");

function primerCaracter() {
  let primerC = palabra.value.charAt(0);
  alert(`El primer caracter de la palabra ${palabra.value} es ${primerC}`);
}
botonPC.addEventListener(`click`, primerCaracter);
