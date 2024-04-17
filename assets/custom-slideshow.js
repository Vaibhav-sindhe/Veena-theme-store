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


            // function updateProductImage(slideIndex, productImage) {
            //     console.log({slideIndex});

            //     if (slideIndex >= 0 && slideIndex < slides.length) {
            //       // Get the target slide element based on the slideIndex
            //       var currentSlide = slides[slideIndex];
            //       console.log(currentSlide);
          
            //       // Get the product image URL from the data attribute of the current slide
            //       var imageUrl = currentSlide.dataset.productImage
            //       console.log({imageUrl});
          
            //       // Update the src attribute of the product image
            //       productImage.src = imageUrl;
            //   }
            //     // var imageUrl = currentSlide.dataset.productImage;
            //     // productImage.src = imageUrl;
            // }

          //   splide.on('moved', function (newIndex) {
          //     // console.log("splided");
          //     if (newIndex !== undefined && newIndex !== null && !isNaN(newIndex)) {
          //         // console.log("entered");
          //       var productImage = document.querySelector('.week-6-product img');
          //         // console.log(productImage,newIndex);
          //         updateProductImage(newIndex, productImage);
          //     }
          // });

          var blocks = blocksData;
          var productImage = document.querySelector('.week-6-product img');
          function updateProductImage(slideIndex) {
            console.log(slideIndex);
            // Get the product image URL from the block settings corresponding to the current slide index
            var productImageURL = blocks[slideIndex].settings.productImage;
        
            // Update the src attribute of the product image
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
  
  
  