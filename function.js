const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");
const dots = Array.from(document.querySelectorAll(".dot"));

let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

nextButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex > slides.length - 1) {
        currentIndex = 0;
    }

    updateCarousel();
});

prevButton.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    updateCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
    });
});

const upIcon = document.getElementById("upIcon");
upIcon.addEventListener("click", zap);

function zap () {
    window.location.href = "https://wa.me/5511954959623";
}