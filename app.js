let inputAmigo = document.getElementById("amigo");
let Amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let componenteResultado = document.getElementById("resultado");

function atualizarLista() {
  listaAmigos.innerHTML = "";

  for (let i = 0; i < Amigos.length; i++) {
    let componenteLista = document.createElement(`li`);
    componenteLista.textContent = Amigos[i];
    listaAmigos.appendChild(componenteLista);
  }
}

function sortearAmigo() {
  let indicePessoaSorteada = Math.floor(Math.random() * Amigos.length);
  let pessoaSorteada = Amigos[indicePessoaSorteada];

  listaAmigos.innerHTML = "";

  let componenteListaResultado = document.createElement(`li`);
  componenteListaResultado.textContent = ("O Amigo sorteado foi " + pessoaSorteada + "!");
  componenteResultado.appendChild(componenteListaResultado);

  Amigos = [];
}

function verificarTexto() {
  if (inputAmigo.value == "") {
    alert("Insira um nome valido");
  }
}

function adicionarAmigo() {
  componenteResultado.innerHTML = ""

  verificarTexto();
  Amigos.push(inputAmigo.value);
  console.log("Adicionado " + inputAmigo.value + " a lista de amigos");
  inputAmigo.value = ""
  atualizarLista()
}