let valor = document.querySelector(".valor");
let seleccion1 = document.querySelector(".seleccion1");
let seleccion2 = document.querySelector(".seleccion2");
let calcular = document.querySelector(".calcular");

function grados() {
  //!Fahrenheit a Celcuis
  if (seleccion1.value == "Fahrenheit" && seleccion2.value == "Celcuis") {
    let gradosCelcuis = ((valor.value - 32) * 5) / 9;

    alert(`La conversion de Fahrenheit a Celcuis es ${gradosCelcuis} ºC`);
  }
  //!Fahrenheit a Kelvin
  else if (seleccion1.value == "Fahrenheit" && seleccion2.value == "Kelvin") {
    let Kelvin = ((valor.value - 32) * 5) / 9 + 273.15;

    alert(`La conversion de Fahrenheit a Kelvin es ${Kelvin} K`);
  }
  //!Celcuis a Fahrenheit
  else if (seleccion1.value == "Celcuis" && seleccion2.value == "Fahrenheit") {
    let gradosFahrenheit = (valor.value * 9) / 5 + 32;

    alert(`La conversion de Celcuis a Fahrenheit es ${gradosFahrenheit} ºF`);
  }
  //!Celcuis a Kelvin
  else if (seleccion1.value == "Celcuis" && seleccion2.value == "Kelvin") {
    let Kelvin1 = parseFloat(valor.value) + 273.15;

    alert(`La conversion de Celcuis a Kelvin es ${Kelvin1} K`);
  }
  //!Kelvin a Celcuis
  else if (seleccion1.value == "Kelvin" && seleccion2.value == "Celcuis") {
    let gradosCelcuis1 = valor.value - 273.15;

    alert(`La conversion de Kelvin a Celcuis es ${gradosCelcuis1} ºC`);
  }
  //!Kelvin a Fahrenheit
  else if (seleccion1.value == "Kelvin" && seleccion2.value == "Fahrenheit") {
    let gradosFahrenheit1 = ((valor.value - 273.15) * 9) / 5 + 32;

    alert(`La conversion de Kelvin a Celcuis es ${gradosFahrenheit1} ºC`);
  }

  //!Mismos grados
  else if (seleccion1.value == seleccion2.value) {
    alert(`Esta tratando de realizar una conversion invalida`);
  }
}

calcular.addEventListener(`click`, grados);
