export default class Acoordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }
  toggleAccordion(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle("ativo");
  }
  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }
  //inicia a função
  init() {
    if (this.accordionList.length) {
      //ativa o primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
