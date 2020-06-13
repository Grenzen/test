let index = 1;
showSlides(index);

function plusSlides(n) {
  showSlides(index += n);
}

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  let slide = document.querySelector('#slide');
  
  if (n > 3) {
    index = 1;
    n = 1;
  }
  if (n <= 0) {
    index = 3;
    n = 3;
  }
  if (n <= 3) {
    slide.className = '';
    slide.classList.add(`slides${n}`);
    currentDots(n);
  }

  function currentDots(n) {
    let dots = document.getElementsByClassName('slider__dots--dot');
    // console.table(dots[n].className);
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].classList.add('active');
  }
}
