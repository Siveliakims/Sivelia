// ==============================
// SIVELIA MWEENDA PORTFOLIO
// JAVASCRIPT
// ==============================

// Mobile Navigation
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});

// Add mobile navigation styling dynamically
const mobileStyle = document.createElement("style");

mobileStyle.innerHTML = `
@media (max-width: 800px) {

    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        padding: 25px;
        background: #080b0a;
        border-bottom: 1px solid #1d2520;
        gap: 20px;
    }

    .nav-links.active a {
        font-size: 16px;
    }
}

`;

document.head.appendChild(mobileStyle);

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
".about-preview, .skill-card, .project-card, .contact"
);

const revealOnScroll = () => {

revealElements.forEach(element => {

    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;

    if (position < screenPosition) {
        element.classList.add("show");
    }

});

};

window.addEventListener("scroll", revealOnScroll);

// Add reveal animation CSS
const revealStyle = document.createElement("style");

revealStyle.innerHTML = `
.about-preview,
.skill-card,
.project-card,
.contact {
opacity: 0;
transform: translateY(30px);
transition: opacity 0.7s ease, transform 0.7s ease;
}

.about-preview.show,
.skill-card.show,
.project-card.show,
.contact.show {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(revealStyle);

// Current Year
const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
copyright.textContent =
"© ${year} Sivelia Mweenda. All rights reserved.";
}

// Simple typing effect
const heroTitle = document.querySelector(".hero h2");

const titles = [
"Student • Developer • Creator • Youth Advocate",
"Web Developer • AI Explorer • Creative",
"Learning • Building • Creating"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

const currentTitle = titles[titleIndex];

if (!deleting) {

    heroTitle.textContent =
        currentTitle.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentTitle.length) {
        deleting = true;

        setTimeout(typeEffect, 1800);
        return;
    }

} else {

    heroTitle.textContent =
        currentTitle.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
        deleting = false;

        titleIndex++;

        if (titleIndex >= titles.length) {
            titleIndex = 0;
        }
    }
}

setTimeout(typeEffect, deleting ? 45 : 75);

}

if (heroTitle) {
typeEffect();
}

// Start reveal check
revealOnScroll();
