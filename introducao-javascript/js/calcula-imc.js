var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i<pacientes.length;i++){

  var paciente = pacientes[i];

  var tdImc = paciente.querySelector(".info-imc");
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if(!pesoValido){
    pesoValido = false;
    console.log("Peso Inválido!");
    tdImc.textContent = "Peso Inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura Inválida!";
    console.log("Altura inválida");
    paciente.classList.add("paciente-invalido");
  }

  if(pesoValido && alturaValida){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
  else{
    tdImc.textContent = "Peso Inválido!";
  }
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso){
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura){
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
