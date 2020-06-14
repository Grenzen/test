let index = 1;
showSlides(index);
activeWindow();

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
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].classList.add('active');
  }
}

function activeWindow(n, name) {
  let index = n || 1;
  let text = name || 'Одностворчатое окно КВЕ';
  let window = document.getElementById('windowImage');
  window.className = '';
  window.classList.add(`windowImage${index}`);
  current(index);
  changeWindowName(text);
}

function current(n) {
  let images = document.getElementsByClassName('window');
  for (let i = 0; i < images.length; i++) {
    images[i].className = images[i].className.replace(' currentWindow', '');
  }
  images[n - 1].classList.add('currentWindow');
}

function changeWindowName(n) {
  let text = n;
  let windowName = document.getElementById('windowName');
  windowName.innerHTML = '';
  windowName.innerHTML = `${text}`;
}