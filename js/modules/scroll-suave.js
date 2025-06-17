export default function initScrollSuave() {
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
