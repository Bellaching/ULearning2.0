var slide_index = 0;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n >= slides.length) {
        slide_index = 0;
    }
    if (n < 0) {
        slide_index = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index].style.display = "block";
}
