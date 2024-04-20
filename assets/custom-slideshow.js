    class CustomSlider extends HTMLElement {
      constructor() {
        super();
        this.element = this.querySelector(".splide");
        this.options = JSON.parse(this.element.dataset.sliderSettings);
        this.mountSplider(this.element.querySelectorAll('.splide__slide'))
      }
    
      mountSplider(slides) {
        let splide=new Splide(this.element,this.options).mount();
          var productImage = document.querySelector('.week-6-product img');
          let prevSlide;
          
          function updateProductImage(slideIndex) {
            if(prevSlide){
              prevSlide.classList.remove("card-active");
            }
              var slideElement = slides[slideIndex];
              slideElement.classList.add("card-active");
              prevSlide=slideElement;
              var productImageURL = slideElement.dataset.productImg;
              console.log(slideElement);
              productImage.src = productImageURL;
          }
          
        
        splide.on('moved', function (newIndex) {
            if (!isNaN(newIndex) && newIndex >= 0 && newIndex < slides.length) {
                updateProductImage(newIndex);
            }
        });
      }
    }
    customElements.define("CustomSlider", CustomSlider);
  
  
  