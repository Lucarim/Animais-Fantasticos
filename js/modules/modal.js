export default class Modal {
  constructor(modal, abrirModal, fecharModal) {
    this.modal = document.querySelector(modal);
    this.abrirModal = document.querySelector(abrirModal);
    this.fecharModal = document.querySelector(fecharModal);

    //bind this ao callback para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  // abre ou fecha o modal
  toggleModal() {
    this.modal.classList.toggle("ativo");
  }
  //adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  // adiciona os eventos de clique
  addEventModal() {
    this.abrirModal.addEventListener("click", this.eventToggleModal);
    this.fecharModal.addEventListener("click", this.eventToggleModal);
    this.modal.addEventListener("click", this.cliqueForaModal);
  }
  //fecha modal ao clicar fora
  cliqueForaModal(event) {
    if (event.target === this.modal) this.toggleModal();
  }
  //inicia a classe
  init() {
    if (this.modal && this.abrirModal && this.fecharModal) {
      this.addEventModal();
    }
    return this;
  }
}
