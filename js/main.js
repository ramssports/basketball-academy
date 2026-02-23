/* =====================================
   RAMS Basketball Academy - Main JS
   Version Mobile First - US Style
===================================== */

/* ===============================
   MENU MOBILE TOGGLE
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

});
/* ===============================
   FERMETURE MENU APRÈS CLIC
================================= */

const menuLinks = document.querySelectorAll("#mobileMenu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});
/* ===============================
   ANIMATION AU SCROLL
================================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

/* ===============================
   BOUTON WHATSAPP FLOTTANT
================================= */

function createWhatsAppButton() {
    const button = document.createElement("a");

    button.href = "https://wa.me/2290166396755";
    button.target = "_blank";
    button.className = "whatsapp-float";
    button.innerHTML = "💬";

    document.body.appendChild(button);
}

createWhatsAppButton();
/* ===============================
   SCROLL SMOOTH
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ===============================
   MESSAGE CONFIRMATION FORM
================================= */
const form = document.querySelector(".inscription-form");

if (form) {
    form.addEventListener("submit", function () {
        alert("Merci pour votre inscription ! Nous vous contacterons bientôt.");
    });
}


// Scroll Animation Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.animate, .animate-left, .animate-right, .animate-zoom')
    .forEach(el => observer.observe(el));