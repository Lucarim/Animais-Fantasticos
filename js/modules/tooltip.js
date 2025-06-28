export default function initTooltip() {
  const tooltip = document.querySelector("[data-tooltip]");

  tooltip.addEventListener("mouseover", onMouseOver);

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    this.addEventListener("mousemove", onMouseMove);
    onMouseMove.tooltipBox = tooltipBox;

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 16 + "px";
      this.tooltipBox.style.left = event.pageX + 16 + "px";
    },
  };

  function criarTooltipBox(element) {
    const text = element.getAttribute("aria-label");
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
