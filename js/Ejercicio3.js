let lado1 = document.querySelector(".lado1");
let lado2 = document.querySelector(".lado2");
let lado3 = document.querySelector(".lado3");
let consultar = document.querySelector(".consultar");

function clasificacionTriangulos() {
  if ((lado1.value = lado2.value = lado3.value)) {
    alert(
      `los 3 lados son iguales, por tal motivo se trata de un triángulo equilatero`
    );
  } else if ((lado1.value != lado2.value) != lado3.value) {
    alert(
      `los 3 lados son diferentes, por tal motivo se trata de un triángulo escaleno`
    );
  }
}
consultar.addEventListener(`click`, clasificacionTriangulos);
