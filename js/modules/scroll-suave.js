export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-scroll='suave'] a[href^='#']"
  );
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
  if (linksInternos.length) {
    linksInternos.forEach((i) => {
      i.addEventListener("click", scrollToSection);
    });
  }
}
