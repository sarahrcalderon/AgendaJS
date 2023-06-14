// Array
const agenda = [
  "Paula",
  "Maria",
  "Pamela",
  "Ana",
  "Linda",
  "Carla",
  "Mariana",
  "Rafaela",
  "Sofia",
  "Elizabeth",
];

// verificar se o nome está na agenda
function verificarNome(nome) {
  if (agenda.includes(nome)) {
    return "Ela está presente nessa agenda.";
  } else {
    return "Desculpe, mas essa pessoa não está na agenda.";
  }
}

// Elementos do DOM
const nomeProcuradoInput = document.getElementById("nomeProcurado");
const btnProcurar = document.getElementById("btnProcurar");
const resultadoDiv = document.getElementById("resultado");

// evento de clique no botão "Procurar"
function procurarNome() {
  const nomeProcurado = nomeProcuradoInput.value;
  const resultado = verificarNome(nomeProcurado);
  resultadoDiv.textContent = resultado;
}

// Adicionar evento de clique "Procurar"
btnProcurar.addEventListener("click", procurarNome);
