//* Cuadrado
let botonPerimetroCu = document.querySelector(".calcularPCU");

//!Perimetro
function perimetroCuadrado() {
  let lado = document.querySelector(".lado");

  let perimetro1 = parseFloat(lado.value) * 4;

  alert(`El perimetro del cuadrado es ${perimetro1}`);
}
botonPerimetroCu.addEventListener(`click`, perimetroCuadrado);

//!Area
let botonAreaCu = document.querySelector(".calcularACU");

function areaCuadrado() {
  let ba = document.querySelector(".baseyaltura");

  let area1 = parseFloat(ba.value) * 2;

  alert(`El área del cuadrado es ${area1}`);
}

botonAreaCu.addEventListener(`click`, areaCuadrado);

//* Circulo

//!Perimetro
let botonPerimetroCi = document.querySelector(".calcularPCI");

function perimetroCirculo() {
  const pi = 3.1416;
  let radio = document.querySelector(".r");

  let perimetro2 = 2 * pi * parseFloat(radio.value);

  alert(`El perimetro del circulo es ${perimetro2}`);
}
botonPerimetroCi.addEventListener(`click`, perimetroCirculo);

//!Area
let botonAreaCi = document.querySelector(".calcularACI");

function areaCirculo() {
  const pi = 3.1416;
  let radio = document.querySelector(".r");

  let area2 = pi * (parseFloat(radio.value) * parseFloat(radio.value));

  alert(`El área del circulo es ${area2}`);
}

botonAreaCi.addEventListener(`click`, areaCirculo);

//* Triangulo

let botonPerimetroT = document.querySelector(".calcularPT");

//!Perimetro
function perimetroTriangulo() {
  let lado1 = document.querySelector(".lado1");
  let lado2 = document.querySelector(".lado2");
  let lado3 = document.querySelector(".lado3");

  let perimetro3 =
    parseFloat(lado1.value) + parseFloat(lado2.value) + parseFloat(lado3.value);

  alert(`El perimetro del Triangulo es ${perimetro3}`);
}
botonPerimetroT.addEventListener(`click`, perimetroTriangulo);

//!Area
let botonAreaT = document.querySelector(".calcularAT");

function areaTriangulo() {
  let base = document.querySelector(".base");
  let altura = document.querySelector(".altura");

  let area3 = (parseFloat(base.value) * parseFloat(altura.value)) / 2;

  alert(`El área del triangulo es ${area3}`);
}

botonAreaT.addEventListener(`click`, areaTriangulo);

//* Rectangulo
let botonPerimetroR = document.querySelector(".calcularPR");

//!Perimetro
function perimetroRectangulo() {
  let lado4 = document.querySelector(".lado4");
  let lado5 = document.querySelector(".lado5");

  let perimetro4 = (parseFloat(lado4.value) * 2)(parseFloat(lado5.value) * 2);

  alert(`El perimetro del rectangulo es ${perimetro4}`);
}
botonPerimetroR.addEventListener(`click`, perimetroRectangulo);

//!Area
let botonAreaR = document.querySelector(".calcularAR");

function areaRectangulo() {
  let base1 = document.querySelector(".base1");
  let altura1 = documet.querySelector(".altura1");

  let area4 = parseFloat(base1.value) * parseFloat(altura1.value);

  alert(`El área del rectangulo es ${area4}`);
}

botonAreaR.addEventListener(`click`, areaRectangulo);
