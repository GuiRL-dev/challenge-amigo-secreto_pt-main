let inputAmigo = document.getElementById("amigo");
let Amigos = [];
let listaAmigos = document.getElementById("listaAmigos")

function sortearAmigo(){
  let indicePessoaSorteada = Math.floor(Math.random() * Amigos.length);
  let pessoaSorteada = Amigos[indicePessoaSorteada];

  adicionarLista(pessoaSorteada, "resultado");
}

function adicionarLista(conteudo, id) {
  let componenteLista = document.createElement(id);
  componenteLista.textContent = conteudo;
  listaAmigos.appendChild(componenteLista);
  inputAmigo.value = "";
}

function verificarTexto() {
  if (inputAmigo.value == "") {
    alert("Insira um nome valido");
  }
}

function adicionarAmigo() {
  verificarTexto();
  Amigos.push(inputAmigo.value);
  console.log("Adicionado " + inputAmigo.value + " a lista de amigos");
  adicionarLista(inputAmigo.value, "li")
}