//Modal cuadrado
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

let venmodalAT = docuem.querySelector(".modalAT");

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
