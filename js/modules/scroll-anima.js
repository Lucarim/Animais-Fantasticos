export default class ScrollAnima {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.5;

    this.checkDistance = this.checkDistance.bind(this);
  }
  // pega a distancia de cada elemento em relação ao topo da pagina
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }
  //checa a distancia do elemento ao scroll da pagina
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else {
        item.element.classList.remove("ativo");
      }
    });
  }
  //adiciona o evento de animação
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
  //remove o evento de animação
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
