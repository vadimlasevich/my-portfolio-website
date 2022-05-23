export const slider = () => {
  const sliderContainer = document.querySelector(".works-slider__container");
  const slides = document.querySelectorAll(".works-slider__slide");
  const sliderBtnPrev = document.querySelector(".works-slider__btn-prev");
  const sliderBtnNext = document.querySelector(".works-slider__btn-next");

  let count = 0;
  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= 576) {
      return (slidesLenght = slides.length - 1);
    } else {
      return (slidesLenght = slides.length - 2);
    }
  };

  const nextSlide = () => {
    getSlidesLenght();

    if (count == slidesLenght) {
      count = 0;
      rollSlider(count);
    } else {
      count++;
      rollSlider(count);
    }
  };

  const prevSlide = () => {
    getSlidesLenght();

    if (count == 0) {
      count = slidesLenght;
      rollSlider(count);
    } else {
      count--;
      rollSlider(count);
    }
  };

  const rollSlider = (count) => {
    let widthSlide = slides[0].offsetWidth;
    sliderContainer.style.transform = `translate(-${count * widthSlide}px)`;
  };

  slides.forEach((slide) => {
    if (window.innerWidth <= 576) {
      slide.addEventListener("click", () => {
        slides.forEach((slide) => {
          slide.classList.remove("works-slider__slide-content-clicked");
        });
        slide.classList.add("works-slider__slide-content-clicked");
      });
    }
  });

  sliderBtnNext.addEventListener("click", nextSlide);
  sliderBtnPrev.addEventListener("click", prevSlide);
};
