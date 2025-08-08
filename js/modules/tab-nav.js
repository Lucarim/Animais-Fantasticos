export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }
  //ativa a tab de acordo com index
  activeTab(i) {
    this.tabContent.forEach((i) => {
      i.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[i].dataset.anime;
    this.tabContent[i].classList.add(this.activeClass, direcao);
  }
  //adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }
  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabNavEvent();
      //ativa o primeiro item
      this.activeTab(0);
    }
    return this;
  }
}
