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

let cermodal1 = document.querySelector(".cerrarModal1");
//Modal Perimetro
btnmodalAT.addEventListener("click", () => {
  venmodalAT.style.display = "block";
});

cermodal1.addEventListener("click", () => {
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

let cermodal2 = document.querySelector(".cerrarModal");
//Modal Perimetro
btnmodalPR.addEventListener("click", () => {
  venmodalPR.style.display = "block";
});

cermodal2.addEventListener("click", () => {
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

let cermodal3 = document.querySelector(".cerrarModal");
//Modal Perimetro
btnmodalAR.addEventListener("click", () => {
  venmodalAR.style.display = "block";
});

cermodal3.addEventListener("click", () => {
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

let cermodal4 = document.querySelector(".cerrarModal4");
//Modal Perimetro
btnmodalPCu.addEventListener("click", () => {
  venmodalPCu.style.display = "block";
});

cermodal4.addEventListener("click", () => {
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

let cermodal5 = document.querySelector(".cerrarModal5");

//Modal Perimetro
btnmodalACu.addEventListener("click", () => {
  venmodalACu.style.display = "block";
});

cermodal5.addEventListener("click", () => {
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

let cermodal6 = document.querySelector(".cerrarModal6");

//Modal Perimetro
btnmodalPCi.addEventListener("click", () => {
  venmodalPCi.style.display = "block";
});

cermodal6.addEventListener("click", () => {
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

let cermodal7 = document.querySelector(".cerrarModal7");

//Modal Perimetro
btnmodalACi.addEventListener("click", () => {
  venmodalACi.style.display = "block";
});

cermodal7.addEventListener("click", () => {
  venmodalACi.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == venmodalACi) {
    venmodalACi.style.display = "none";
  }
});
