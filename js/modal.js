//*Modal Triangulo
let btnmodalPT = document.querySelector(".perimetroT");

let venmodalPT = document.querySelector(".modalPT");

let cermodal = document.querySelector(".cerrarModal");

//Modal Perimetro
btnmodalPT.addEventListener("click", () => {
  venmodalPT.style.display = "block";
});

cermodal.addEventListener("click", () => {
  venmodalPT.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == venmodalPT) {
    venmodalPT.style.display = "none";
  }
});

//Modal Area

let btnmodalAT = document.querySelector(".areaT");

let venmodalAT = document.querySelector(".modalAT");

//Modal Perimetro
btnmodalAT.addEventListener("click", () => {
  venmodalAT.style.display = "block";
});

cermodal.addEventListener("click", () => {
  venmodalAT.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == venmodalAT) {
    venmodalAT.style.display = "none";
  }
});
//!Fin modal triangulo

//*Modal Ractangulo

let btnmodalPR = document.querySelector(".perimetroR");

let venmodalPR = document.querySelector(".modalPR");

//Modal Perimetro
btnmodalPR.addEventListener("click", () => {
  venmodalPR.style.display = "block";
});

cermodal.addEventListener("click", () => {
  venmodalPR.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == venmodalPR) {
    venmodalPR.style.display = "none";
  }
});

//Modal Area

let btnmodalAR = document.querySelector(".areaR");

let venmodalAR = document.querySelector(".modalAR");

//Modal Perimetro
btnmodalAR.addEventListener("click", () => {
  venmodalAR.style.display = "block";
});

cermodal.addEventListener("click", () => {
  venmodalAR.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == venmodalAR) {
    venmodalAR.style.display = "none";
  }
});

//!Fin modal Rectangulo

//* Modal Cuadrado

let btnmodalPCu = document.querySelector(".perimetroCu");

let venmodalPCu = document.querySelector(".modalPCu");

//Modal Perimetro
btnmodalPCu.addEventListener("click", () => {
  venmodalPCu.style.display = "block";
});

cermodal.addEventListener("click", () => {
  venmodalPCu.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == venmodalPCu) {
    venmodalPCu.style.display = "none";
  }
});

//Modal Area

let btnmodalACu = document.querySelector(".areaCu");

let venmodalACu = document.querySelector(".modalACu");

//Modal Perimetro
btnmodalACu.addEventListener("click", () => {
  venmodalACu.style.display = "block";
});

cermodal.addEventListener("click", () => {
  venmodalACu.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == venmodalACu) {
    venmodalACu.style.display = "none";
  }
});
//!Fin modal Cuadrado

//*Modal Circulo

let btnmodalPCi = document.querySelector(".perimetroCi");

let venmodalPCi = document.querySelector(".modalPCI");

//Modal Perimetro
btnmodalPCi.addEventListener("click", () => {
  venmodalPCi.style.display = "block";
});

cermodal.addEventListener("click", () => {
  venmodalPCi.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == venmodalPCi) {
    venmodalPCi.style.display = "none";
  }
});

//Modal Area

let btnmodalACi = document.querySelector(".areaCi");

let venmodalACi = document.querySelector(".modalACI");

//Modal Perimetro
btnmodalACi.addEventListener("click", () => {
  venmodalACi.style.display = "block";
});

cermodal.addEventListener("click", () => {
  venmodalACi.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == venmodalACi) {
    venmodalACi.style.display = "none";
  }
});
