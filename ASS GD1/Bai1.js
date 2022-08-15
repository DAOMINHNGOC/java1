var slideIndex = 0;
showSlide();

function plusSlides(n) {
    showSlide2((slideIndex += n));
}

function showSlide2(n) {
    var slides = document.getElementsByClassName("one");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function showSlide() {
    var slides = document.getElementsByClassName("one");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlide, 5000);
}


