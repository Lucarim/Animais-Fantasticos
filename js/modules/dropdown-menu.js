export default function initDropdownMenu() {
  const dropdownMenu = document.querySelector("[data-dropdown]");

  ["touchstart", "click"].forEach((userEvent) => {
    dropdownMenu.addEventListener(userEvent, handleClick);
  });
  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
  }
}
