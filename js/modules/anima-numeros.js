export default class initAnimaNumeros {
  constructor(numeros, observerClass, observerTarget) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    //bind this ao callback para fazer referencia ao objeto da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  //recebe um elemento do dom, com um numero em seu texto
  //incrementa de 0 ate o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  //ativa incrementar numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }
  //função que ocorre quando a mutação acontecer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  //adiciona o MutationObserver para verificar
  //quando a classe "ativo" é adicionada ao target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }
  init() {
    if (this.numeros.length && this.observerClass && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
