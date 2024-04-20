class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.element = this.querySelector(".splide");
    this.options = JSON.parse(this.element.dataset.sliderSettings);
    console.log(this.options);
    this.mountSplider();
  }

  mountSplider() {
    new Splide(this.element, this.options).mount();
  }
}
customElements.define("splider-component", CustomSlider);
