    class CustomSlider extends HTMLElement {
      constructor() {
        super();
        this.element = this.querySelector(".splide");
        this.options = JSON.parse(this.element.dataset.sliderSettings);
        this.mountSplider(this.element.querySelectorAll('.splide__slide'))
        console.log(this);
      }
    
      mountSplider(slides) {
        let splide=new Splide(this.element,this.options).mount();
          var blocks = blocksData;
          var productImage = document.querySelector('.week-6-product img');
          
          
          function updateProductImage(slideIndex) {
              var slideElement = slides[slideIndex];
              var productImageURL = slideElement.dataset.productImg;
              console.log(productImageURL);
              productImage.src = productImageURL;
          }
          
        
        // Listen for slide change event
        splide.on('moved', function (newIndex) {
            // Ensure that newIndex is a valid index
            if (!isNaN(newIndex) && newIndex >= 0 && newIndex < slides.length) {
                // Update the product image based on the current slide index
                updateProductImage(newIndex);
            }
        });
      }
    }
    customElements.define("splider-component", CustomSlider);
  
  
  