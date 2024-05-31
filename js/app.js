const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    nextButton.click();
}, 5000);



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", () => {
            question.nextElementSibling.classList.toggle("active");
            question.nextElementSibling.style.display = question.nextElementSibling.style.display === "block" ? "none" : "block";
        });
    });
});

function showTab(tabName) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });
    document.querySelectorAll(".faq-content").forEach(content => {
        content.classList.remove("active");
    });

    document.querySelector(`#${tabName}`).classList.add("active");
    document.querySelector(`.tab[onclick="showTab('${tabName}')"]`).classList.add("active");
}

showTab('general');

