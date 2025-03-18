let amigo = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    if (!nombreAmigo) {
        alert ( "Debes ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let indice = 0; indice < amigo.length; indice++) {
        let item = document.createElement("li");
        item.textContent = amigo[indice];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigos() {
    if(amigo.length === 0){
        alert ( "No hay amigos para el sorteo ");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;
    amigo = [];
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}