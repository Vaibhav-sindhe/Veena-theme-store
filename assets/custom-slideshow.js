class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.element = this.querySelector(".splide");
    console.log(this.element.dataset.sliderSettings);
    this.options = JSON.parse(this.element.dataset.sliderSettings);
    this.mountSplider();
  }

  mountSplider() {
    new Splide(this.element, this.options).mount();
  }
}
customElements.define("splider-component", CustomSlider);
