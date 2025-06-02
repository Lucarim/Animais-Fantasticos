function initTabNav() {
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
}
initTabNav();

function initAcoordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    const activeClass = "ativo";
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((i) => {
      i.addEventListener("click", activeAccordion);
    });
  }
}
initAcoordion();
