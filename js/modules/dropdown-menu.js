export default function initDropdownMenu() {
  const dropdownMenu = document.querySelector("[data-dropdown]");
  const html = document.documentElement;

  ["touchstart", "click"].forEach((userEvent) => {
    dropdownMenu.addEventListener(userEvent, handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    html.addEventListener("click", clickOutSide);
    html.addEventListener("touchstart", clickOutSide);
  }

  function clickOutSide(event) {
    console.log(event.target);
    if (!dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove("ativo");
      html.removeEventListener("click", clickOutSide);
      html.removeEventListener("touchstart", clickOutSide);
    }
  }
}
