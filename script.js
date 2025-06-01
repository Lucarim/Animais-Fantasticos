const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent div");

if (tabContent.length && tabMenu.length) {
  tabContent[0].classList.add("ativo");
  function activeTab(i) {
    tabContent.forEach((i) => {
      i.classList.remove("ativo");
    });
    tabContent[i].classList.add("ativo");
  }
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
