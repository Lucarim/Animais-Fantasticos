export default function initAcoordion() {
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
