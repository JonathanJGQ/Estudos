
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);
  var erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function obtemPacienteDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("O nome não pode ser em branco");
  }
  if (paciente.gordura.length == 0){
    erros.push("A gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0){
    erros.push("O peso não pode ser em branco");
  }

  if (paciente.altura.length == 0){
    erros.push("A altura não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }
  return erros;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nomeTd = montaTd(paciente.nome,"info-nome");
  var pesoTd = montaTd(paciente.peso,"info-peso");
  var alturaTd = montaTd(paciente.altura,"info-altura");
  var gorduraTd = montaTd(paciente.gordura,"info-gordura");
  var imcTd = montaTd(paciente.imc,"info-imc");

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  for(var i=0;i<erros.length;i++){
    var erro = erros[i];
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  }
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
