import outSideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "ativo";

    if (events === undefined) this.eventos = ["touchstart", "click"];
    else this.eventos = events;

    this.openMenu = this.openMenu.bind(this);
  }
  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outSideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }
  addEventMenuMobile() {
    this.eventos.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }
  init() {
    if (this.menuButton && this.menuList) {
      this.addEventMenuMobile();
    }
    return this;
  }
}
