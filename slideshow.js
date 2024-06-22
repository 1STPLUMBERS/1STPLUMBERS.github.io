var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Arrow key navigation
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    showSlidesManual(-1); // Move to previous slide
  } else if (event.key === "ArrowRight") {
    showSlidesManual(1); // Move to next slide
  }
});

// Manual control of slides
function showSlidesManual(n) {
  var slides = document.getElementsByClassName("mySlides");
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } // Wrap around to the first slide
  if (slideIndex < 1) {
    slideIndex = slides.length;
  } // Wrap around to the last slide
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  // Wrap around when reaching the last slide
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
}