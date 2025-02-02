// Esto agrega a la pantalla el valor del boton de la calculadora que toquemos

function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

function borrar() {
  document.getElementById("pantalla").value = "";
}

function del() {
  let numero = document.getElementById("pantalla").value;
  let nuevoNumero = numero.substring(0, numero.length - 1);
  pantalla.value = nuevoNumero;
}

function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla);
  document.getElementById("pantalla").value = resultado;
}
