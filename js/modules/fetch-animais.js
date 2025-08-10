import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //cria a div contendo a div com as informações dos animaais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  //preenche cada animal no DOM
  function preecherAnimais(animal) {
    const numerosGrid = document.querySelector(target);
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  //anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", "ativo", ".numeros");
    animaNumeros.init();
  }
  //puxa os animais de um arquivo json e cria cada animal usando a função createAnimal
  async function criarAnimais() {
    try {
      //fetch, espera as resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      //apos a tranformação ativa as funções para preencher e animar os numeros
      animaisJson.forEach((animal) => preecherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
