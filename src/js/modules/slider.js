export const slider = () => {
  const sliderContainer = document.querySelector(".works-slider__slides");
  const sliderSlides = document.querySelectorAll(".works-slider__slide");
  const sliderBtnLeft = document.querySelector(".works-slider__btn-left");
  const sliderBtnRight = document.querySelector(".works-slider__btn-right");

  let count = 0;
  let slideWidth = sliderSlides[0].offsetWidth;
  let marginSlideStr = getComputedStyle(sliderSlides[0]).marginRight;
  let marginSlideNumber = parseInt(marginSlideStr.substring(0, marginSlideStr.length - 2));

  const slideNext = () => {
    if (count == sliderSlides.length - 2) {
      count = 0;
      sliderRoll(count);
    } else {
      count++;
      sliderRoll(count);
    }
  };

  const slidePrev = () => {
    if (count == 0) {
      count = sliderSlides.length - 2;
      sliderRoll(count);
    } else {
      count--;
      sliderRoll(count);
    }
  };

  const sliderRoll = (count) => {
    console.log(slideWidth);
    sliderContainer.style.transform = `translate(-${count * (slideWidth + marginSlideNumber)}px)`;
  };

  sliderBtnRight.addEventListener("click", slideNext);
  sliderBtnLeft.addEventListener("click", slidePrev);
};
