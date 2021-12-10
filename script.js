let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("carousel-content");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i = i + 1) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}
