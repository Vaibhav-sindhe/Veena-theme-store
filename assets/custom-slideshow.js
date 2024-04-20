    class CustomSlider extends HTMLElement {
      constructor() {
        super();
        this.element = this.querySelector(".splide");
        this.options = JSON.parse(this.element.dataset.sliderSettings);
        this.mountSplider(this.element.querySelectorAll('.splide__slide'))
      }
    
      mountSplider(slideList) {
          splide=new Splide(this.element,this.options).mount();
          slides=slideList;
      }
    }
    customElements.define("splider-component", CustomSlider);
  
  
  