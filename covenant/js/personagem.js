var formulario = document.getElementById("formulario");
var iniciarBotao = document.getElementById("iniciarBotao");

iniciarBotao.addEventListener("click", function(e) {
  e.preventDefault();

  var nome = document.getElementById("nome").value;
  var habilidade = document.getElementById("habilidade").value;

  console.log(nome);
  console.log(habilidade);

  var personagem = [];

  var vitalidade = 0;
  var sanidade = 0;

  if (habilidade === "medico") {
    vitalidade = 125;
    sanidade = 100;
  } else if (habilidade === "ocultista") {
    vitalidade = 80;
    sanidade = 125;
  } else if (habilidade === "analista") {
    vitalidade = 95;
    sanidade = 115;
  } else if (habilidade === "combatente") {
    vitalidade = 90;
    sanidade = 120;
  }

  var personagemObj = {
    nome: nome,
    habilidade: habilidade,
    vitalidade: vitalidade,
    sanidade: sanidade
  };

  if (localStorage.hasOwnProperty("personagem")) {
    personagem = JSON.parse(localStorage.getItem("personagem"));
  }

  personagem.push(personagemObj);

  localStorage.setItem("personagem", JSON.stringify(personagem));
  
  location.href = "escolhas.html";
});
