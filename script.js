const botaoEntrada = document.querySelector("body > button");

if (botaoEntrada && !document.getElementById("botaoBolo")) {
    botaoEntrada.addEventListener("click", function() {
        window.location.href = "festa.html";
    });
}

const botaoBolo = document.getElementById("botaoBolo");
const botaoPresente = document.getElementById("botaoPresente");
const botaoGin = document.getElementById("botaoGin");

if (botaoBolo) {
    botaoBolo.addEventListener("click", function() {
        alert("Você pegou seu pedaço de bolo!\n\nIngredientes: aura, 67 calorias, açúcar");
    });
}

if (botaoPresente) {
    botaoPresente.addEventListener("click", function() {
        alert("Você ganhou +1067 de aura chad!");
    });
}

if (botaoGin) {
    botaoGin.addEventListener("click", function() {
        document.getElementById("opcoesGin").style.display = "block";
    });
}

const simGin = document.getElementById("simGin");
const naoGin = document.getElementById("naoGin");

if (simGin) {
    simGin.addEventListener("click", function() {
        alert("Você tomou gin e desbloqueou: 🗿 Modo Chad.");
    });
}

if (naoGin) {
    naoGin.addEventListener("click", function() {
        alert("A bebê recusou o gin. Respeitável. +10 aura de responsabilidade.");
    });
}
