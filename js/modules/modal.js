export default function initModal() {
  const modal = document.querySelector("[data-modal='container']");
  const abrirModal = document.querySelector("[data-modal='abrir']");
  const fecharModal = document.querySelector("[data-modal='fechar']");
  function toggleModal(event) {
    event.preventDefault();
    modal.classList.toggle("ativo");
  }
  function cliqueForaModal(event) {
    if (event.target === this) toggleModal(event);
  }
  if (modal && abrirModal && fecharModal) {
    abrirModal.addEventListener("click", toggleModal);
    fecharModal.addEventListener("click", toggleModal);
    modal.addEventListener("click", cliqueForaModal);
  }
}
