export const slider = () => {
  const sliderContainer = document.querySelector(".works-slider__slides");
  const sliderSlides = document.querySelectorAll(".works-slider__slide");
  const sliderBtnLeft = document.querySelector(".works-slider__btn-left");
  const sliderBtnRight = document.querySelector(".works-slider__btn-right");

  let count = 0;
  let slideWidth;
  let marginSlideNumber;

  function init() {
    slideWidth = sliderSlides[0].offsetWidth;
    let marginSlideStr = getComputedStyle(sliderSlides[0]).marginRight;
    marginSlideNumber = parseInt(marginSlideStr.substring(0, marginSlideStr.length - 2));
    return slideWidth, marginSlideNumber;
  }

  function slideNext() {
    let slidesLength = sliderSlides.length;
    if (window.innerWidth < 576) {
      slidesLength -= 1;
    } else {
      slidesLength -= 2;
    }
    if (count == slidesLength) {
      count = 0;
      sliderRoll(count);
    } else {
      count++;
      sliderRoll(count);
    }
  }

  function slidePrev() {
    let slidesLength = sliderSlides.length;
    if (window.innerWidth < 576) {
      slidesLength -= 1;
    } else {
      slidesLength -= 2;
    }
    if (count == 0) {
      count = slidesLength;
      sliderRoll(count);
    } else {
      count--;
      sliderRoll(count);
    }
  }

  function sliderRoll(count) {
    sliderContainer.style.transform = `translate(-${count * (slideWidth + marginSlideNumber)}px)`;
  }

  sliderBtnRight.addEventListener("click", () => {
    init();
    slideNext();
  });
  sliderBtnLeft.addEventListener("click", () => {
    init();
    slidePrev();
  });
  // window.addEventListener("resize", init);
};
