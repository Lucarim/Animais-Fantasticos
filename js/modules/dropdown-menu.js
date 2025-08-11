import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "ativo";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }
  //adiciona os eventos ao dropdown menu
  addEventDropdownMenu() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }
  //ativa o dropdown menu e adiciona a função
  //que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }
  init() {
    if (this.dropdownMenus.length) this.addEventDropdownMenu();
    return this;
  }
}
