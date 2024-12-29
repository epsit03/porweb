const navLinks = document.querySelectorAll("nav a");
const swipeContainer = document.querySelector(".swipe-container");
let currentIndex = 0;

// Set up click navigation
navLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        updateActiveLink(index);
        swipeTo(index);
    });
});

// Swipe to a specific section
function swipeTo(index) {
    currentIndex = index;
    swipeContainer.style.transform = `translateX(-${index * 100}vw)`;
}

// Update active link
function updateActiveLink(index) {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
}

// Swipe gestures for mobile
let startX = 0;
let deltaX = 0;

swipeContainer.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
});

swipeContainer.addEventListener("touchmove", (event) => {
    deltaX = event.touches[0].clientX - startX;
});

swipeContainer.addEventListener("touchend", () => {
    if (deltaX > 50 && currentIndex > 0) {
        swipeTo(currentIndex - 1);
        updateActiveLink(currentIndex - 1);
    } else if (deltaX < -50 && currentIndex < navLinks.length - 1) {
        swipeTo(currentIndex + 1);
        updateActiveLink(currentIndex + 1);
    }
    deltaX = 0;
});
