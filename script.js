function initTabNav() {
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
initTabNav();

function initAcoordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
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

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-scroll='suave'] a[href^='#']"
  );
  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    linksInternos.forEach((i) => {
      i.addEventListener("click", scrollToSection);
    });
  }
}
initScrollSuave();

function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initScrollAnimation();
