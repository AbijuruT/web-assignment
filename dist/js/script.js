const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle', 'nav-menu')

/** Carousel images */

const carouselContent = document.querySelector(".carousel-content");
const images = document.querySelectorAll(".carousel-content img");

let currentIndex = 0;
let autoSlideInterval;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
    
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 3000); // Time i take for image to pop-in
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start auto-slide when the page loads
startAutoSlide();

// Pause auto-slide on hover
carouselContent.addEventListener("mouseover", stopAutoSlide);
carouselContent.addEventListener("mouseout", startAutoSlide);

// Show the first image initially
showImage(currentIndex);
