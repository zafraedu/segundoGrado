"use strict";
// var raiz = Math.sqrt(num);       Es una funcion que calcula la raiz cuadrada de una variable numerica1
const formulario = document.querySelector(".contenido");
const enunciado = document.querySelector(".enunciado");
const volver = document.querySelector(".volver");

function calcular() {
  //variables del calculo
  var a = document.querySelector("#grado2").value;
  var b = document.querySelector("#grado1").value;
  var c = document.querySelector("#idependiente").value;
  //calculo
  var discriminante = b * b - 4 * a * c;
  var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  //validacion del formulario
  if (discriminante > 0) {
    console.log(x1, x2);
    enunciado.innerHTML = `X1=${x1.toString().substring(0, 5)} X2=${x2
      .toString()
      .substring(0, 5)}`;
  } else if (discriminante == 0) {
    console.log(x1);
    enunciado.innerHTML = "X=" + x1.toString().substring(0, 5);
  } else if (discriminante < 0) {
    console.log("No tiene solucion");
    enunciado.innerHTML = "No tiene solución";
  }
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return false;
  }
  //clases anadida
  enunciado.classList.add("enunciado2");
  volver.classList.add("volver2");
}
formulario.addEventListener("submit", calcular);
volver.addEventListener("click", () => (window.location.href = ""));
