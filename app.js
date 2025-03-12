let amigos = [];
let nome;

function adicionarAmigo() {
  nome = document.querySelector("input").value;

  if (nome == "") {
    alert("Por favor, insira um nome.");
  } else {
    if (amigos.includes(nome)) {
      alert("Esse nome já existe na lista. Digite outro nome.");
    } else {
      amigos.push(nome);
    }
    atualizarListaDeAmigos();
    limparCampo();
    console.log(`${amigos}`);
  }
}

function limparCampo() {
  nome = document.querySelector("input");
  nome.value = "";
}

function atualizarListaDeAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  let nomeNaLista = 0;
  let numeroDeAmigos = 0;

  for (nomeNaLista = 0; nomeNaLista < amigos.length; nomeNaLista++) {
    numeroDeAmigos++;
    lista.innerHTML += `<li>${amigos[nomeNaLista]}</li>`;
  }
}

function sortearAmigo() {
  let amigoEscolhido = "";

  if (amigos.length >= 1) {
    amigoEscolhido = Math.floor(Math.random() * amigos.length);
    console.log(`${amigoEscolhido}`);
    nome = amigos[amigoEscolhido];
    console.log(`${nome}`);
    amigos.splice(amigoEscolhido, 1);
    console.log(`${amigos}`);

    atualizarListaDeAmigos();

    let campoDoAmigoSorteado = document.getElementById("resultado");
    campoDoAmigoSorteado.innerHTML = `Seu amigo secreto é ${nome} !`;

    if (amigos.length === 0) {
      setTimeout(function () {
        document.getElementById("resultado").innerHTML = "";
      }, 8000);
    }
  } else {
    alert("Não há amigos para sortear. Insira uma lista de amigos.");
  }
}
