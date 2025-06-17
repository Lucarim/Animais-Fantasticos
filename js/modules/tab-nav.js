export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] div");
  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(i) {
      tabContent.forEach((i) => {
        i.classList.remove("ativo");
      });
      const direcao = tabContent[i].dataset.anime;
      tabContent[i].classList.add("ativo", direcao);
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
