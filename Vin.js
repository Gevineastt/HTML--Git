

// ===== SLIDE ANIMATION =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach((section, index) => {
    section.classList.add(index % 2 === 0 ? "hidden-left" : "hidden-right");
    observer.observe(section);
});


// ===== STAGGER ANIMATION =====
const staggerItems = document.querySelectorAll(".timeline-content, .cta-buttons a");

staggerItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
    item.classList.add("stagger-hidden");
    observer.observe(item);
});


// ===== PARALLAX EFFECT =====
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY = scrollY * 0.5 + "px";
});


// ===== TYPING EFFECT =====
const text = "Passionate about coding, technology, and continuous learning";
const typingElement = document.querySelector(".subtitle");

let i = 0;

function typeEffect() {
    if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

typingElement.textContent = "";
window.addEventListener("load", typeEffect);