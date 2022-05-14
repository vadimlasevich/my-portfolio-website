export const slider = () => {
  const sliderContainer = document.querySelector(".works-slider__slides");
  const sliderSlides = document.querySelectorAll(".works-slider__slide");
  const sliderBtnLeft = document.querySelector(".works-slider__btn-left");
  const sliderBtnRight = document.querySelector(".works-slider__btn-right");

  let count = 0;
  let slideWidth = sliderSlides[0].offsetWidth;
  let slideMargin;

  const slideNext = () => {
    if (window.innerWidth < 576) {
      if (count == sliderSlides.length - 1) {
        count = 0;
        sliderRoll(count);
      } else {
        count++;
        sliderRoll(count);
      }
    } else {
      if (count == sliderSlides.length - 2) {
        count = 0;
        sliderRoll(count);
      } else {
        count++;
        sliderRoll(count);
      }
    }
  };

  const slidePrev = () => {
    if (window.innerWidth < 576) {
      if (count == 0) {
        count = sliderSlides.length - 1;
        sliderRoll(count);
      } else {
        count--;
        sliderRoll(count);
      }
    } else {
      if (count == 0) {
        count = sliderSlides.length - 2;
        sliderRoll(count);
      } else {
        count--;
        sliderRoll(count);
      }
    }
  };

  const sliderRoll = (count) => {
    if (window.innerWidth < 992) {
      slideMargin = 50;
    } else {
      slideMargin = 80;
    }
    sliderContainer.style.transform = `translate(-${count * (slideWidth + slideMargin)}px)`;
  };

  sliderBtnRight.addEventListener("click", slideNext);
  sliderBtnLeft.addEventListener("click", slidePrev);
};
